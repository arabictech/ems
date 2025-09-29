package com.employee.ems.service;

import com.employee.ems.entity.Users;
import com.employee.ems.repository.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class UserService {

    @Autowired
    private UsersRepo  usersRepo;

    public Users addUser(@RequestBody Users users) {
        return usersRepo.save(users);
    }

}
