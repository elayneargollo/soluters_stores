package soluterstoreapi.soluterstoreapi.service.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import soluterstoreapi.soluterstoreapi.filters.ProductFilter;
import soluterstoreapi.soluterstoreapi.model.Product;
import soluterstoreapi.soluterstoreapi.service.interfaces.IProductService;
import soluterstoreapi.soluterstoreapi.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ProductService implements IProductService {

    private ProductRepository repository;

    @Autowired
    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    @Override
    public Page<Product> getPage(ProductFilter filter, Pageable pageable) {
        return repository.findByFilter(filter.getName(), filter.getPrice(), filter.getDescription(), pageable);
    }

    @Override
    public Product getById(String id) {
        if(id == null || id.isEmpty())
            throw new IllegalArgumentException("Id é null ou vazio");

        Optional<Product> productOptional = Optional.ofNullable(repository.getById(id));

        if (!productOptional.isPresent())
            throw new NoSuchElementException("Produto não encontrado");

        return productOptional.get();
    }
}