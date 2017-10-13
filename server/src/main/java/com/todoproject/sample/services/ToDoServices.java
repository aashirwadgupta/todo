package com.todoproject.sample.services;

import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todoproject.sample.dao.ToDoRepository;
import com.todoproject.sample.dao.UserRepository;
import com.todoproject.sample.model.ToDoModel;
import com.todoproject.sample.model.UserModel;

@Service
public class ToDoServices {

	@Autowired
	private ToDoRepository toDoRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	public ToDoModel getToDoForUser(String toDoId) {
		return toDoRepo.findOne(toDoId);
	}

	public ToDoModel createToDoForUser(String userId, ToDoModel toDoModel) {
		UserModel user = userRepo.findOne(userId);
		Date d = new Date();
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-DD");
		String dateStr = sdf.format(d);
		// encode data on your side using BASE64
		String bytesEncoded = Base64.getEncoder().encodeToString((dateStr+userId).getBytes());
		System.out.println("ecncoded value is " + bytesEncoded );

		// Decode data on other side, by processing encoded data
		byte[] valueDecoded = Base64.getDecoder().decode(bytesEncoded );
		System.out.println("Decoded value is " + new String(valueDecoded));
		toDoModel.setId(bytesEncoded);
		toDoRepo.save(toDoModel);
		user.getToDoIds().put(dateStr, bytesEncoded);
		userRepo.save(user);
		return toDoModel;
	}

	public ToDoModel updateToDo(ToDoModel toDoModel) {
		ToDoModel toDo = toDoRepo.findOne(toDoModel.getId());
		if(toDo!=null){
			toDo.setTaskList(toDo.getTaskList());
			toDoRepo.save(toDo);
		} else {
			createToDoForUser(toDoModel.getId(), toDoModel);
		}
		return toDo;
	}

}
