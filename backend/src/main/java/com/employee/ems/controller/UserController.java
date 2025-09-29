package com.employee.ems.controller;

import com.employee.ems.entity.Users;
import com.employee.ems.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService  userService;

    @PostMapping
    public Users addUser(@RequestBody Users users) {
        return userService.addUser(users);
    }

}
