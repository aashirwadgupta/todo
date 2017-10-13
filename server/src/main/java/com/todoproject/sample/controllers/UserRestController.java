package com.todoproject.sample.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.todoproject.sample.model.ProfileModel;
import com.todoproject.sample.model.UserModel;
import com.todoproject.sample.services.UserServices;

@RestController
public class UserRestController {

	@Autowired
	private UserServices userService;
	
	@RequestMapping(value="/api/getAllUsers", method=RequestMethod.GET)
	public List<UserModel> getAllUsers(){
		return userService.findAllUsers();
	}
	
	@RequestMapping(value="/api/getUser", method=RequestMethod.GET)
	public UserModel getUser(@RequestParam("id") String userId){
		return userService.getAUser(userId);
	}
	
	@RequestMapping(value="/api/login", method=RequestMethod.GET)
	public UserModel logInUser(@RequestParam("id") String userId, @RequestParam("code") String secretCode){
		return userService.doLogin(userId, secretCode);
	}
	
	@RequestMapping(value="/api/userProfile", method=RequestMethod.GET)
	public ProfileModel getUserProfile(@RequestParam("id") String userId){
		return userService.getUserProfile(userId);
	}
	
	@RequestMapping(value="/api/updateUserProfile", method=RequestMethod.POST)
	public String updateUserProfile(@RequestBody ProfileModel profile){
		return userService.updateUserProfile(profile);
	}
	
	@RequestMapping(value="/api/createUser", method=RequestMethod.POST)
	public String createUser(@RequestBody ProfileModel profile){
		return userService.createUser(profile);
	}
}
