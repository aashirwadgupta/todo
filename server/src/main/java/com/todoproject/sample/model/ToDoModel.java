package com.todoproject.sample.model;

import java.util.Map;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "todos")
public class ToDoModel {
	private String id;
	private Map<Long, TaskModel> taskList;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Map<Long, TaskModel> getTaskList() {
		return taskList;
	}
	public void setTaskList(Map<Long, TaskModel> taskList) {
		this.taskList = taskList;
	}
		
}
