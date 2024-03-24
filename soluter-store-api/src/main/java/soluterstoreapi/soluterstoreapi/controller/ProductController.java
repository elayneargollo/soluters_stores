package soluterstoreapi.soluterstoreapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import soluterstoreapi.soluterstoreapi.model.Product;
import soluterstoreapi.soluterstoreapi.filters.ProductFilter;
import soluterstoreapi.soluterstoreapi.service.interfaces.IProductService;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;

@RestController
@CrossOrigin
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private IProductService service;

    @GetMapping
    public Page<Product> getPage(ProductFilter filter, @PageableDefault(size = 10, sort = "name") Pageable pageable) {
        return service.getPage(filter, pageable);
    }

    @GetMapping("/{id}")
    public Product getById(@PathVariable String id) {
       return service.getById(id);
    }
}