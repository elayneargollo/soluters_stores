package soluterstoreapi.soluterstoreapi.repository.interfaces;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import soluterstoreapi.soluterstoreapi.model.User;

import java.util.Optional;

@Repository
public interface IUserRepository extends MongoRepository<User,String> {
    Optional<User> findByUserId(String userId);
}
