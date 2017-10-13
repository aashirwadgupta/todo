package com.todoproject.sample.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.todoproject.sample.model.UserModel;

@Repository
public interface UserRepository extends MongoRepository<UserModel, String> {

}
