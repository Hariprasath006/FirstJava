package com.codewith.firstApp.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.codewith.firstApp.model.User;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
}
