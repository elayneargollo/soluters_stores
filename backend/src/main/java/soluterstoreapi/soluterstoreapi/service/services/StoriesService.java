package soluterstoreapi.soluterstoreapi.service.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import soluterstoreapi.soluterstoreapi.model.Stories;
import soluterstoreapi.soluterstoreapi.repository.StoriesRepository;
import soluterstoreapi.soluterstoreapi.service.interfaces.IStoriesService;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class StoriesService implements IStoriesService {

    private final StoriesRepository repository;

    @Autowired
    public StoriesService(StoriesRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Stories> findByUserId(String userId) {
        if(userId == null || userId.isEmpty())
            throw new NullPointerException("Usuário não encontrado com ID: " + userId);

        return repository.findByUserId(userId);
    }
}
