package soluterstoreapi.soluterstoreapi.repository;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import soluterstoreapi.soluterstoreapi.model.Order;
import soluterstoreapi.soluterstoreapi.repository.interfaces.IOrderRepository;
import java.util.List;


@org.springframework.stereotype.Repository
public class OrderRepository implements IOrderRepository {

    private final MongoTemplate mongoTemplate;

    public OrderRepository(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    public String findHighestIdentifier() {
        Query query = new Query();

        query.with(Sort.by(Sort.Direction.DESC, "identifier"));
        query.limit(1);

        Order order = mongoTemplate.findOne(query, Order.class);
        return order != null ? order.getIdentifier() : null;
    }

    @Override
    public void addOrder(List<Order> orders) {
        for (Order order : orders) {
            mongoTemplate.save(order);
        }
    }
}

