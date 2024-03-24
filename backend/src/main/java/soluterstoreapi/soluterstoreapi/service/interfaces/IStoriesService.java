package soluterstoreapi.soluterstoreapi.service.interfaces;


import soluterstoreapi.soluterstoreapi.model.Stories;

import java.util.List;

public interface IStoriesService {
    List<Stories> findByUserId(String userId);
}
