//package com.employee.ems.service;
//
//import com.employee.ems.entity.Users;
//import com.employee.ems.repository.UsersRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.web.bind.annotation.RequestBody;
//
//import java.util.List;
//
//@Service
//public class UserService {
//
//    @Autowired
//    private UsersRepo usersRepo;
//
//    public Users addUser(@RequestBody Users users) {
//        return usersRepo.save(users);
//    }
<<<<<<< HEAD

    public Users updateUser(long id, Users users) {
        return usersRepo.save(users);
    }

    public void deleteUser(long id) {
        usersRepo.deleteById((int) id);
    }

}
=======
//
//    public List<Users> GetallUser() {
//        return usersRepo.findAll();
//    }
//
////    public Users getUserById(long id){
////        return usersRepo.findById(id).get();
////    }
//
//    public Users updateUser(long id, Users users) {
//        return usersRepo.save(users);
//    }
//
//    public void deleteUser(long id) {
//        usersRepo.deleteById(id);
//    }
//
//}
>>>>>>> d0d8f32f5ef1bc24e00a017d15496a683bf7b7cf
