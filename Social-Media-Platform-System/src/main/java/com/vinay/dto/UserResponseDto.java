package com.vinay.dto;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDto {
	
	 private Long id;
	    

	    private String name;

	    private String email;
	    
	    private String bio;
	    

	    @Column(name = "created_at")
	    private LocalDateTime createdAt;
	    
	    @Column(name = "updated_at")
	    private LocalDateTime updatedAt;

}
