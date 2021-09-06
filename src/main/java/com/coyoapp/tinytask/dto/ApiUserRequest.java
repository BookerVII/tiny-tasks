package com.coyoapp.tinytask.dto;


import lombok.Data;

@Data
public class ApiUserRequest {
    private String username;
    private String password;
}
