package com.codecool.backend.service;

import com.codecool.backend.model.user.Role;
import com.codecool.backend.model.user.UserEntity;
import com.codecool.backend.model.user.UserDTO;
import com.codecool.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean register(UserDTO user) {
        if (userRepository.getUserEntityByName(user.getName()).isEmpty()) {
            UserEntity newUser = new UserEntity();
            newUser.setName(user.getName());
            newUser.setPassword(user.getPassword());
            newUser.add(Role.ROLE_USER);
            this.userRepository.save(newUser);
            return true;
        } else {
            return false;
        }
    }

    public void login() {

    }

    public UserEntity getUserByName(String name) {
        Optional<UserEntity> user = this.userRepository.getUserEntityByName(name);
        return user.orElseThrow(() -> new IllegalArgumentException(String.format("User not found: %s", name)));
    }
}
