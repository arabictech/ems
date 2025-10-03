<<<<<<< HEAD
package com.employee.ems.service;

import com.employee.ems.entity.Users;
import com.employee.ems.repository.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class UserService {

   @Autowired
   private UsersRepo usersRepo;

   public Users addUser(@RequestBody Users users) {
       return usersRepo.save(users);
   }
=======
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
>>>>>>> 224f70196b6f596fb7df1b3cbac2fb945d890935

    public Users updateUser(long id, Users users) {
        return usersRepo.save(users);
    }

    public void deleteUser(long id) {
        usersRepo.deleteById((int) id);
    }

<<<<<<< HEAD
}
=======
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
>>>>>>> 224f70196b6f596fb7df1b3cbac2fb945d890935
