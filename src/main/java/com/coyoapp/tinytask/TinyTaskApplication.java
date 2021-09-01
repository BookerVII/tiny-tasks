package com.coyoapp.tinytask;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TinyTaskApplication {

  public static void main(String[] args) {
    SpringApplication.run(TinyTaskApplication.class, args);
  }

}

// https://javatodev.com/spring-boot-jwt-authentication/
// https://github.com/spring-projects/spring-security/blob/main/oauth2/oauth2-resource-server/src/main/java/org/springframework/security/oauth2/server/resource/web/access/BearerTokenAccessDeniedHandler.java
// https://www.tabnine.com/code/java/classes/org.springframework.security.oauth2.server.resource.web.access.BearerTokenAccessDeniedHandler
