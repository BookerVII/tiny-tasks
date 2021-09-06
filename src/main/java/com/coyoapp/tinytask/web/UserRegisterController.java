package com.coyoapp.tinytask.web;

import com.coyoapp.tinytask.domain.User;
import com.coyoapp.tinytask.dto.ApiUserRequest;
import com.coyoapp.tinytask.dto.UserResponse;
import com.coyoapp.tinytask.repository.UserRepository;
import com.coyoapp.tinytask.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Slf4j
@Service
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/registration")
public class UserRegisterController {

  private final UserService userService;
  private final BCryptPasswordEncoder bCryptPasswordEncoder;
  private final UserRepository userRepository;

  @PostMapping
  public UserResponse createUser(@RequestBody @Valid ApiUserRequest userRequest){
    log.debug("createUser(createUser={})",userRequest);
    User userByUsername = userRepository.findByUsername(userRequest.getUsername());
    if (userByUsername.getId()!=null){
      throw new RuntimeException("User already registered. Reset Password.");
    }
    userRequest.setPassword(bCryptPasswordEncoder.encode(userRequest.getPassword()));
    return userService.createUser(userRequest);
  }



}
