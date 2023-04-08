package com.vinay.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vinay.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
