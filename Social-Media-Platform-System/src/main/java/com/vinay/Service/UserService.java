package com.vinay.Service;

import java.util.List;

import com.vinay.dto.UserDto;
import com.vinay.dto.UserResponseDto;

/**
 * Service interface for managing users.
 */
public interface UserService {

    /**
     * Creates a new user.
     * 
     * @param userDto The user data transfer object.
     * @return The created user entity.
     * @throws BadRequestException if the input data is invalid.
     */
    UserResponseDto createUser(UserDto userDto);

    /**
     * Retrieves a user by ID.
     * 
     * @param id The ID of the user to retrieve.
     * @return The retrieved user entity.
     * @throws NotFoundException if the user is not found.
     */
    UserResponseDto getUserById(Long id);

    /**
     * Updates a user's name or bio by ID.
     * 
     * @param id The ID of the user to update.
     * @param userUpdateDto The user update data transfer object.
     * @return The updated user entity.
     * @throws NotFoundException if the user is not found.
     * @throws BadRequestException if the input data is invalid.
     */
    UserResponseDto updateUserById(Long id, UserDto userUpdateDto);

    /**
     * Deletes a user by ID.
     * 
     * @param id The ID of the user to delete.
     * @throws NotFoundException if the user is not found.
     */
    void deleteUserById(Long id);

    /**
     * Retrieves the total number of users.
     * 
     * @return The total number of users.
     */
    Long getTotalUserCount();

    /**
     * Retrieves the top 5 most active users, based on the number of posts.
     * 
     * @return A list of the top 5 most active users.
     */
    List<UserResponseDto> getTop5ActiveUsers();
    
    
    /**
     * Retrieves total users, in the database.
     * 
     * @return A list of all users.
     */
    List<UserResponseDto> getAllUsers();
}


