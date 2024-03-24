package soluterstoreapi.soluterstoreapi.mocks;

import soluterstoreapi.soluterstoreapi.filters.ProductFilter;
import soluterstoreapi.soluterstoreapi.model.Product;

public class ProductMock {

    public static Product GetProduct() {
       Product product = new Product();

       product.setId("6559b09bcc69801ca6c6a38e");
       product.setName("Garmin Forerunner 55");
       product.setDescription("Garmin Forerunner 55 Black EU Wrist Heart Rate Monitor with GPS");
       product.setPrice(1568.0);
       product.setStock(2);
       product.setImage("https://imgcentauro-a.akamaihd.net/1366x1366/96650402A2.jpgImage 1");

       return product;
    }

    public static ProductFilter GetProductFilter(){
        ProductFilter productFilter =  new ProductFilter();

        productFilter.setDescription("Garmin Forerunner 55 Black EU Wrist Heart Rate Monitor with GPS");
        productFilter.setName("Garmin Forerunner 55");
        productFilter.setPrice(1568.0);

        return productFilter;
    }

}
