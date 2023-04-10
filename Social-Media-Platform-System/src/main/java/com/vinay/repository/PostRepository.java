package com.vinay.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.vinay.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
	
	@Query("Select count(*) from Post")
	Long totalPost();
	
	@Query("Select p from Post p order by likes desc limit 5")
	List<Post> getTo5LikesPosts();

}