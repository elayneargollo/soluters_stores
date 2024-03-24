package soluterstoreapi.soluterstoreapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;
import soluterstoreapi.soluterstoreapi.model.User;
import soluterstoreapi.soluterstoreapi.service.interfaces.IUserService;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {
    @Autowired
    private IUserService service;

    @GetMapping("/{id}")
    public User findById(@PathVariable String id){
        return service.getById(id);
    }

    @GetMapping
    public User createOrGetUser(@AuthenticationPrincipal Jwt jwt){
        return service.createOrGetUser(jwt);
    }
}
