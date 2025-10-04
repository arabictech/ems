<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 224f70196b6f596fb7df1b3cbac2fb945d890935
package com.employee.ems.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class Users {

    // Users(user_id, username, password, role)

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long user_id;
    private String username;
    private String email;
    private String password;
    private String role;


}
<<<<<<< HEAD
=======
=======
//package com.employee.ems.entity;
//
//
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@Entity
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//@Table(name = "users")
//public class Users {
//
//    // Users(user_id, username, password, role)
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private long user_id;
//    private String username;
//    private String email;
//    private String password;
//    private String role;
//
//
//}
>>>>>>> d0d8f32f5ef1bc24e00a017d15496a683bf7b7cf
>>>>>>> 224f70196b6f596fb7df1b3cbac2fb945d890935
