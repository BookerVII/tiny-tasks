package com.coyoapp.tinytask.service;

import com.coyoapp.tinytask.dto.ApiUserRequest;
import com.coyoapp.tinytask.dto.UserRequest;
import com.coyoapp.tinytask.dto.UserResponse;
import java.util.List;

public interface UserService {

  UserResponse createUser(ApiUserRequest userRequest);

  List<UserResponse> getUsers();

  void deleteUser(String userId);

  UserResponse updateUser(UserRequest userRequest);

}
