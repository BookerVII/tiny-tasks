package com.coyoapp.tinytask.configuration;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Slf4j
@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {


  //! adding bcryptPasswordEncoder as bean
  @Bean
  public BCryptPasswordEncoder bCryptPasswordEncoder(){
    return new BCryptPasswordEncoder();
  }

  public class AuthenticationConfigConstants {
    public static final String SECRET = "tiny_task_api_token_secret";
    public static final long EXPIRATION_TIME = 604800;
    public static final String TOKEN_PREFIX = "Bearer";
    public static final String HEADER_STRING = "Authorization";
    public static final String SIGN_UP_URL = "/api/user";
  }


//  @Override
//  protected void configure(HttpSecurity http) throws Exception {
//    http.cors()
//        .and()
//              .authorizeRequests()
//              .antMatchers(HttpMethod.GET, "/users","/tasks", "/api/users/**")
//                .hasAuthority("SCOPE_read")
//              .antMatchers(HttpMethod.POST, "/api/login")
//                .hasAuthority("SCOPE_write")
//              .anyRequest()
//                .authenticated()
//        .and()
//              .oauth2ResourceServer()
//                .jwt();
//  }

}
