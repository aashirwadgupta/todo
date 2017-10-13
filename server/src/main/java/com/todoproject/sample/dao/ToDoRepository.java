package com.todoproject.sample.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.todoproject.sample.model.ToDoModel;

@Repository
public interface ToDoRepository extends MongoRepository<ToDoModel, String> {

}
