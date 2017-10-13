package com.todoproject.sample.model;

import java.util.Map;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class UserModel {
	private String id;
	private String mailId;
	private String secretCode;
	private String lastSeen;
	private ProfileModel profile;
	private Map<String, String> toDoIds;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getMailId() {
		return mailId;
	}
	public void setMailId(String mailId) {
		this.mailId = mailId;
	}
	public String getSecretCode() {
		return secretCode;
	}
	public void setSecretCode(String secretCode) {
		this.secretCode = secretCode;
	}
	public String getLastSeen() {
		return lastSeen;
	}
	public void setLastSeen(String lastSeen) {
		this.lastSeen = lastSeen;
	}
	public ProfileModel getProfile() {
		return profile;
	}
	public void setProfile(ProfileModel profile) {
		this.profile = profile;
	}
	public Map<String, String> getToDoIds() {
		return toDoIds;
	}
	public void setToDoIds(Map<String, String> toDoIds) {
		this.toDoIds = toDoIds;
	}
}
