package com.example.spring_boot_validation_demo.repository;

import com.example.spring_boot_validation_demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}