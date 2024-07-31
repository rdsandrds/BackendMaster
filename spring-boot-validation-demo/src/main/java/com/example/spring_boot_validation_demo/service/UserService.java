package com.example.spring_boot_validation_demo.service;


import com.example.spring_boot_validation_demo.dto.UserDto;
import com.example.spring_boot_validation_demo.entity.User;
import com.example.spring_boot_validation_demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(UserDto userDTO) {
        User user = new User();
        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setAge(userDTO.getAge());
        return userRepository.save(user);
    }

}
