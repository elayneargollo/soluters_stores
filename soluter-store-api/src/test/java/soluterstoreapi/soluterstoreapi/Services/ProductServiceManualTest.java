package soluterstoreapi.soluterstoreapi.Services;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import soluterstoreapi.soluterstoreapi.filters.ProductFilter;
import soluterstoreapi.soluterstoreapi.mocks.ProductMock;
import soluterstoreapi.soluterstoreapi.model.Product;
import soluterstoreapi.soluterstoreapi.repository.ProductRepository;
import soluterstoreapi.soluterstoreapi.service.services.ProductService;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(MockitoExtension.class)
public class ProductServiceManualTest {

    @Mock
    ProductRepository productRepository;
    @InjectMocks
    private ProductService productService;

    @Test
    void GetPageSucess() {
        // given
        List<Product> productList = new ArrayList<Product>();
        productList.add(ProductMock.GetProduct());

        ProductFilter productFilter = ProductMock.GetProductFilter();
        Page<Product> pageProduct = new PageImpl<>(productList);

        Pageable pageable = null;

        // when
        when(productRepository.findByFilter(productFilter.getName(),
                productFilter.getPrice(),
                productFilter.getDescription(),
                pageable))
                .thenReturn(pageProduct);

        //then
        Page<Product> productágeReturn =
                productService.getPage(productFilter, pageable);

        assertThat(pageProduct).isEqualTo(productágeReturn);
    }

    @Test
    void GetByIdSucess() {

        // given
        Product productMock = ProductMock.GetProduct();

        // when
        when(productRepository.getById(productMock.getId())).thenReturn(productMock);

        //then
        Product productReturn = productService.getById(productMock.getId());

        assertNotNull(productReturn.toString());
        assertThat(productReturn.getName()).isEqualTo(productMock.getName());
        assertThat(productReturn.getDescription()).isEqualTo(productMock.getDescription());
        assertThat(productReturn.getImage()).isEqualTo(productMock.getImage());
    }

    @Test
    void GetByIdErrorWithIdNull() throws IllegalArgumentException {
        //then
        assertThrows(IllegalArgumentException.class, () ->
                        productService.getById(null), "Id é null ou vazio");
    }

    @Test
    void GetByIdWithIdEmpty() throws IllegalArgumentException {
        //then
        assertThrows(IllegalArgumentException.class, () ->
                productService.getById(""), "Id é null ou vazio");
    }

    @Test
    void GetByIdProductNotFound() throws NoSuchElementException {
        // given
        Product productMock = ProductMock.GetProduct();

        // then
        assertThrows(NoSuchElementException.class, () ->
                productService.getById(productMock.getId()), "Produto não encontrado ");
    }
}
