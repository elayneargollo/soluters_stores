package soluterstoreapi.soluterstoreapi.service.interfaces;

import soluterstoreapi.soluterstoreapi.model.Product;
import soluterstoreapi.soluterstoreapi.filters.ProductFilter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Page<Product> getPage(ProductFilter filter, Pageable pageable);
    Product getById(String id);
}
