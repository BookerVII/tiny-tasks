package com.coyoapp.tinytask.service;

import com.coyoapp.tinytask.domain.User;
import org.springframework.stereotype.Service;

import java.util.Optional;

public interface LoginService extends UserService{
  Optional<User> findById (String id);

  User save (User user);

  Iterable<User> findAll();
}

@Service
class LoginServiceImpl  {


}
