package com.vinay.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vinay.dto.UserDto;
import com.vinay.exception.ResourceNotFoundException;
import com.vinay.model.User;
import com.vinay.repository.UserRepository;

import jakarta.validation.Validator;
@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
    private  UserRepository userRepository;
	
	@Autowired
	private ModelMapper modelMapper;

   

    @Override
    public UserDto createUser( UserDto userCreateDto) {
        User user = modelMapper.map(userCreateDto, User.class);
        User savedUser = userRepository.save(user);
        return modelMapper.map(savedUser, UserDto.class);
    }

    @Override
    public UserDto getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
        return modelMapper.map(user, UserDto.class);
    }

    @Override
    public UserDto updateUserById(Long id, UserDto userUpdateDto) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
        user.setName(userUpdateDto.getName());
        user.setBio(userUpdateDto.getBio());
        user.setUpdatedAt(LocalDateTime.now());
        User updatedUser = userRepository.save(user);
        return modelMapper.map(updatedUser, UserDto.class);
    }

    @Override
    public void deleteUserById(Long id) {
    	userRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
        userRepository.deleteById(id);
    }

    

    @Override
    public List<UserDto> getTopActiveUsers() {
        List<User> users = userRepository.findAll();
        List<UserDto> userDtos = users.stream().map(user-> modelMapper.map(users, UserDto.class)).collect(Collectors.toList());
        return userDtos;
    }

	@Override
	public Long getTotalUserCount() {
		// TODO Auto-generated method stub
		return null;
	}

   
    
}
