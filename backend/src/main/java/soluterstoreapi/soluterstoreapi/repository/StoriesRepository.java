package soluterstoreapi.soluterstoreapi.repository;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import soluterstoreapi.soluterstoreapi.model.Stories;
import soluterstoreapi.soluterstoreapi.repository.interfaces.IStoriesRepository;
import java.util.List;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;

@org.springframework.stereotype.Repository
public class StoriesRepository implements IStoriesRepository {

    private final MongoTemplate mongoTemplate;

    public StoriesRepository(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public List<Stories> findByUserId(String userId) {

       Aggregation aggregation = Aggregation.newAggregation(
                Aggregation.match(Criteria.where("userId").is(userId)),
                Aggregation.project("userId"),
                Aggregation.lookup(
                        "order",
                        "userId",
                        "userId",
                        "order")
        );

        AggregationResults<Stories> results = mongoTemplate.aggregate(aggregation, "stories", Stories.class);
        return results.getMappedResults();
    }
}