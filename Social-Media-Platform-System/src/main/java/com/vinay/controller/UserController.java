package com.vinay.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

@RestController
@RequestMapping("/users")
public class UserController {
    
	@Autowired
    private  UserService userService;

    

    @PostMapping("/")
    public ResponseEntity<UserDto> createUser(@RequestBody UserDto userDto) {
        UserDto createdUser = userService.createUser(userDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable Long id) {
        UserDto userDto = userService.getUserById(id);
        return ResponseEntity.ok(userDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDto> updateUserById(@PathVariable Long id, @RequestBody UserDto userUpdateDto) {
        UserDto updatedUser = userService.updateUserById(id, userUpdateDto);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserById(@PathVariable Long id) {
        userService.deleteUserById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/analytics/users")
    public ResponseEntity<Long> getTotalUsers() {
//        Long totalUsers = userService.getTotalUsers();
        return ResponseEntity.ok(222l);
    }

    @GetMapping("/analytics/users/top-active")
    public ResponseEntity<List<UserDto>> getTopActiveUsers() {
        List<UserDto> topActiveUsers = userService.getTopActiveUsers();
        return ResponseEntity.ok(topActiveUsers);
    }
}

