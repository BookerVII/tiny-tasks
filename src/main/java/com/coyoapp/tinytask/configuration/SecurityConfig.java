package com.coyoapp.tinytask.configuration;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.validation.constraints.NotNull;

@Slf4j
@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {


  //! adding bcryptPasswordEncoder as bean
  @Bean
  public BCryptPasswordEncoder bCryptPasswordEncoder(){
    return new BCryptPasswordEncoder();
  }


  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.cors()
        .and()
              .authorizeRequests()
              .antMatchers(HttpMethod.GET, "/users","/tasks", "/api/users/**")
                .hasAuthority("SCOPE_read")
              .antMatchers(HttpMethod.POST, "/api/login")
                .hasAuthority("SCOPE_write")
              .anyRequest()
                .authenticated()
        .and()
              .oauth2ResourceServer()
              .accessDeniedHandler()
                .jwt();
  }

}
