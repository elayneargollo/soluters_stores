package soluterstoreapi.soluterstoreapi.repository.interfaces;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import soluterstoreapi.soluterstoreapi.model.Product;

import java.util.List;

public interface IProductRepository {
    Page<Product> findByFilter(String name, Double price, String description, Pageable pageable);
    Product getById(String id);
    void updateProductBalances(List<Product> products);
}
