package com.vinay.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vinay.Service.UserService;
import com.vinay.dto.UserDto;
import com.vinay.dto.UserResponseDto;

@RestController
//@RequestMapping("/users")
@CrossOrigin(origins = "https://social-media-platform-system-production.up.railway.app")
public class UserController {
    
	@Autowired
    private  UserService userService;

    

    @PostMapping("/users/")
    public ResponseEntity<UserResponseDto> createUser(@RequestBody UserDto userDto) {
    	UserResponseDto createdUser = userService.createUser(userDto);
        return new ResponseEntity<UserResponseDto>(createdUser,HttpStatus.CREATED);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserResponseDto> getUserById(@PathVariable Long id) {
        return new ResponseEntity<UserResponseDto>(userService.getUserById(id), HttpStatus.OK);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<UserResponseDto> updateUserById(@PathVariable Long id, @RequestBody UserDto userUpdateDto) {
        return new ResponseEntity<UserResponseDto>(userService.updateUserById(id, userUpdateDto), HttpStatus.OK);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteUserById(@PathVariable Long id) {
        userService.deleteUserById(id);
        return ResponseEntity.noContent().build();
    }

    

    @GetMapping("/analytics/users/top-active")
    public ResponseEntity<List<UserResponseDto>> getTopActiveUsers() {
        return new ResponseEntity<List<UserResponseDto>>(userService.getTop5ActiveUsers(), HttpStatus.OK);
    }
    
    @GetMapping("/users/")
    public ResponseEntity<List<UserResponseDto>> getAllUsers() {
        return new ResponseEntity<List<UserResponseDto>>(userService.getAllUsers(), HttpStatus.OK);
    }
    
    
    @GetMapping("/analytics/users")
    public ResponseEntity<Long> getTotalNumberOfUser(){
    	return new ResponseEntity<Long>(userService.getTotalUserCount(), HttpStatus.OK);
    }
    
}

