package com.vinay.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.vinay.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
	
	@Query("Select count(*) from Post")
	Long totalPost();

}