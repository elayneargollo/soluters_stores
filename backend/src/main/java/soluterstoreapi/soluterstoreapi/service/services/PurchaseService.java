package soluterstoreapi.soluterstoreapi.service.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import soluterstoreapi.soluterstoreapi.model.Product;
import soluterstoreapi.soluterstoreapi.model.User;
import soluterstoreapi.soluterstoreapi.model.Order;
import soluterstoreapi.soluterstoreapi.repository.ProductRepository;
import soluterstoreapi.soluterstoreapi.repository.interfaces.IOrderRepository;
import soluterstoreapi.soluterstoreapi.repository.interfaces.IUserRepository;
import soluterstoreapi.soluterstoreapi.service.interfaces.IPurchaseService;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class PurchaseService implements IPurchaseService {

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private ProductRepository productsRepository;

    @Autowired
    private IOrderRepository orderRepository;

    @Override
    public void finish(String email, List<String> productIds) {

        userRepository.findByUserId(email)
                .ifPresent(user -> {

                    try {
                        List<Product> products = fillProducts(productIds);
                        double total = products.stream().mapToDouble(Product::getPrice).sum();

                        if (user.getBalance() < total) {
                            throw new IllegalArgumentException("Saldo insuficiente");
                        }

                        List<Order> orders = convertProductListToOrderList(products, user.getUserId());
                        orderRepository.addOrder(orders);

                        user.setBalance(user.getBalance() - total);
                        userRepository.save(user);

                        productsRepository.updateProductBalances(products);
                    } catch (NoSuchFieldException e) {
                        throw new RuntimeException(e);
                    }
                });
    }

    private List<Product> fillProducts(List<String> productIds) throws NoSuchFieldException {
        List<Product> productsNew = new ArrayList<>();

        for (String id : productIds) {
            var productNew = productsRepository.getById(id);

            if (productNew == null) {
                throw new NoSuchFieldException ("Produto não encontrado");
            }

            productsNew.add(productNew);
        }

        return productsNew;
    }

    private List<Order> convertProductListToOrderList(List<Product> productList, String userId) {
        String maxIdentifierPresent = orderRepository.findHighestIdentifier();
        String numberOrder = incrementStringNumber(maxIdentifierPresent);

        return productList.stream()
                .map(product -> createOrderFromProduct(product, userId, numberOrder))
                .collect(Collectors.toList());
    }

    private Order createOrderFromProduct(Product product, String userId, String numberOrder) {
        Order order = new Order();

        order.setPrice(product.getPrice());
        order.setProductName(product.getName());
        order.setQuantity(1);
        order.setAccomplished(new Date());
        order.setUserId(userId);
        order.setIdentifier(numberOrder);

        return order;
    }

    private String incrementStringNumber(String str) {
        String prefix = str.replaceAll("\\d", "");
        String numberStr = str.replaceAll("\\D", "");

        int number = Integer.parseInt(numberStr);
        number++;

        return prefix + Integer.toString(number);
    }
}