package com.coyoapp.tinytask.web;


import com.coyoapp.tinytask.repository.UserRepository;
import com.coyoapp.tinytask.service.LoginService;
import com.coyoapp.tinytask.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/api/login")
public class LoginController {

  private LoginService loginService;

  private UserRepository userRepository;

  public LoginController(UserRepository userRepository){
    this.userRepository = userRepository;
  }

  @CrossOrigin(origins = "http://localhost:8089")
  @GetMapping(value = "/{id}")
  public UserDto findOne(@PathVariable String id){
    User entity = userRepository.findOne(id);
    return convertToDto(entity);
  }


}
