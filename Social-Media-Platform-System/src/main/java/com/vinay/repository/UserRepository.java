package com.vinay.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.vinay.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u LEFT JOIN Post p GROUP BY u.id ORDER BY COUNT(p) ASC LIMIT 5")
    List<User> findTop5OrderByPostCountDesc();
    
    @Query("SELECT count(*) from User")
    Long totalUser();
}
