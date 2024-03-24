package soluterstoreapi.soluterstoreapi.Services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import soluterstoreapi.soluterstoreapi.filters.ProductFilter;
import soluterstoreapi.soluterstoreapi.model.Product;
import soluterstoreapi.soluterstoreapi.repository.ProductRepository;
import soluterstoreapi.soluterstoreapi.service.services.ProductService;
import java.util.NoSuchElementException;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class ProductServiceCopilotTest {

    @InjectMocks
    ProductService productService;

    @Mock
    ProductRepository productRepository;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void GetPageSucess() {
        ProductFilter filter = new ProductFilter();
        Pageable pageable = mock(Pageable.class);
        Page<Product> page = mock(Page.class);

        when(productRepository.findByFilter(filter.getName(), filter.getPrice(), filter.getDescription(), pageable)).thenReturn(page);

        Page<Product> result = productService.getPage(filter, pageable);

        assertEquals(page, result);
        verify(productRepository, times(1)).findByFilter(filter.getName(), filter.getPrice(), filter.getDescription(), pageable);
    }

    @Test
    public void GetByIdSucess() {
        String id = "1";
        Product product = new Product();

        when(productRepository.getById(id)).thenReturn(product);

        Product result = productService.getById(id);

        assertEquals(product, result);
        verify(productRepository, times(1)).getById(id);
    }

    @Test
    public void GetByIdWhenIdIsNull() {
        assertThrows(IllegalArgumentException.class, () -> productService.getById(null));
    }

    @Test
    public void GetByIdWhenIdIsEmpty() {
        assertThrows(IllegalArgumentException.class, () -> productService.getById(""));
    }

    @Test
    public void GetByIdWhenProductNotFound() {
        String id = "1";

        when(productRepository.getById(id)).thenReturn(null);

        assertThrows(NoSuchElementException.class, () -> productService.getById(id));
    }

}