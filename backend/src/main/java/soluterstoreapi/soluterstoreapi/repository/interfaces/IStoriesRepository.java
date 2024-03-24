package soluterstoreapi.soluterstoreapi.repository.interfaces;

import java.util.List;
import soluterstoreapi.soluterstoreapi.model.Stories;

public interface IStoriesRepository {
    List<Stories> findByUserId(String id);
}
