package soluterstoreapi.soluterstoreapi.service.interfaces;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.oauth2.jwt.Jwt;
import soluterstoreapi.soluterstoreapi.model.User;


public interface IUserService {
    User getById(String id);

    User createOrGetUser(Jwt jwt);

}
