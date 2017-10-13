package com.todoproject.sample.services;

import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todoproject.sample.dao.ToDoRepository;
import com.todoproject.sample.model.ToDoModel;

@Service
public class ToDoServices {

	@Autowired
	private ToDoRepository toDoRepo;
	
	public ToDoModel getToDoForUser(String toDoId) {
		return toDoRepo.findOne(toDoId);
	}

	public ToDoModel createToDoForUser(String userId, ToDoModel toDoModel) {
		toDoModel.setId(userId);
		toDoRepo.save(toDoModel);
		return toDoModel;
	}

	public ToDoModel updateToDo(ToDoModel toDoModel) {
		ToDoModel toDo = toDoRepo.findOne(toDoModel.getId());
		if(toDo!=null){
			toDo.setTaskList(toDoModel.getTaskList());
			toDoRepo.save(toDo);
		} else {
			toDo = createToDoForUser(toDoModel.getId(), toDoModel);
		}
		return toDo;
	}

}
