package soluterstoreapi.soluterstoreapi.service.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;
import soluterstoreapi.soluterstoreapi.model.User;
import soluterstoreapi.soluterstoreapi.repository.interfaces.IUserRepository;
import soluterstoreapi.soluterstoreapi.service.interfaces.IUserService;

import java.util.NoSuchElementException;

@Service
public class UserService implements IUserService {
    @Autowired
    private IUserRepository repository;

    public User getById(String id) {
        return repository.findById(id).orElseThrow(
                () -> new NoSuchElementException("Usuário não encontrado com ID: " + id));

    }

    @Override
    public User createOrGetUser(Jwt jwt) {
        return repository.findByUserId(jwt.getClaimAsString("email"))
                .orElseGet(() -> {
                    User user = new User();
                    user.setUserId(jwt.getClaimAsString("email"));
                    user.setName(jwt.getClaimAsString("name"));
                    user.setBalance(0.0);
                    return repository.save(user);
                });
    }
}
