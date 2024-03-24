package soluterstoreapi.soluterstoreapi.repository.interfaces;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import soluterstoreapi.soluterstoreapi.model.Order;

import java.util.List;

public interface IOrderRepository  {
    String findHighestIdentifier();
    void addOrder(List<Order> orders);
}
