package com.todoproject.sample.model;

public class TaskModel {
	private boolean isCompleted;
	private String toDoText;
	
	public String getToDoText() {
		return toDoText;
	}
	public void setToDoText(String toDoText) {
		this.toDoText = toDoText;
	}
	public boolean isCompleted() {
		return isCompleted;
	}
	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}
	
}
