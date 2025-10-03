<<<<<<< HEAD
package com.employee.ems.controller;

import com.employee.ems.entity.Users;
import com.employee.ems.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService  userService;

    @PostMapping
    public Users addUser(@RequestBody Users users) {
        return userService.addUser(users);
    }

    @GetMapping
    public List<Users> GetallUser(){
        return userService.GetallUser();
    }

//    @GetMapping({"/{id}"})
//    public Users getUserById(@PathVariable("id") long id){
//        return userService.getUserById(id);
=======
//package com.employee.ems.controller;
//
//import com.employee.ems.entity.Users;
//import com.employee.ems.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/user")
//public class UserController {
//
//    @Autowired
//    private UserService  userService;
//
//    @PostMapping
//    public Users addUser(@RequestBody Users users) {
//        return userService.addUser(users);
>>>>>>> d0d8f32f5ef1bc24e00a017d15496a683bf7b7cf
//    }
//
//    @GetMapping
//    public List<Users> GetallUser(){
//        return userService.GetallUser();
//    }
//
////    @GetMapping({"/{id}"})
////    public Users getUserById(@PathVariable("id") long id){
////        return userService.getUserById(id);
////    }
//
//    @PutMapping("/{id}")
//    public Users updateUser(@PathVariable int id, @RequestBody Users users){
//        users.setUser_id(id);
//        return userService.updateUser(id, users);
//    }
//
//    @DeleteMapping("/{id}")
//    public String deleteUser(@PathVariable int id){
//        userService.deleteUser(id);
//        return "Deleted User Successfully";
//    }
//
//}
