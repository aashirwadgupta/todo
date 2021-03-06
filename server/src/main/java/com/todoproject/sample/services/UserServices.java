package com.todoproject.sample.services;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todoproject.sample.dao.ToDoRepository;
import com.todoproject.sample.dao.UserRepository;
import com.todoproject.sample.model.ProfileModel;
import com.todoproject.sample.model.UserModel;

@Service
public class UserServices {
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private ToDoRepository toDoRepo;
	
	public UserModel doLogin(String userId, String secretCode) {
		UserModel userModel = userRepo.findOne(userId);
		if(null!=userModel) {
			if(secretCode.equals(userModel.getSecretCode())){
				return userModel;
			} else {
				return null;
			}
		} else {
			return null;
		}
	}

	public List<UserModel> findAllUsers() {
		return userRepo.findAll();
	}

	public UserModel getAUser(String userId) {
		UserModel userModel = userRepo.findOne(userId);
		return userModel;
	}

	public String updateUserProfile(ProfileModel profile) {
		UserModel userModel = userRepo.findOne(profile.getId());
		userModel.setProfile(profile);
		try{
			userRepo.save(userModel);
			return "success";
		} catch(Exception e){
			return "error";
		}
	}

	public ProfileModel getUserProfile(String userId) {
		return userRepo.findOne(userId).getProfile();
	}

	public UserModel createUser(ProfileModel profile) {
		UserModel userModel = new UserModel();
		userModel.setId(profile.getId());
		userModel.setProfile(profile);
		userModel.setSecretCode(profile.getSecretCode());
		userModel.setMailId(profile.getId());
		userModel.setFullName(profile.getFullName());
		userModel.setToDoIds(new HashMap<String, String>());
		userRepo.save(userModel);
		return userModel;
	}

	public String deleteUser(String userId) {
		userRepo.deleteAll();
		toDoRepo.deleteAll();
		return null;
	}

}
