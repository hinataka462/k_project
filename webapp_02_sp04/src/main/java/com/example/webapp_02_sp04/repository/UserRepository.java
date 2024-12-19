package com.example.webapp_02_sp04.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.webapp_02_sp04.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
