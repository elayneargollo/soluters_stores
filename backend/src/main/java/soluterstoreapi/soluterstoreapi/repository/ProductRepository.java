package soluterstoreapi.soluterstoreapi.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import soluterstoreapi.soluterstoreapi.model.Product;
import soluterstoreapi.soluterstoreapi.repository.interfaces.IProductRepository;
import java.util.ArrayList;
import java.util.List;

@org.springframework.stereotype.Repository
public class ProductRepository implements IProductRepository {

    private final MongoTemplate mongoTemplate;

    public ProductRepository(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public Page<Product> findByFilter(String name, Double price, String description, Pageable pageable) {
        Query query = buildQuery(name, price, description, pageable);

        List<Product> products = mongoTemplate.find(query, Product.class);
        return new PageImpl<>(products, pageable, mongoTemplate.count(query, Product.class));
    }

    private Query buildQuery(String name, Double price, String description, Pageable pageable) {
        List<Criteria> criteriaList = new ArrayList<>();

        addCriteria(criteriaList, "name", name, true);
        addCriteria(criteriaList, "price", price, false);
        addCriteria(criteriaList, "description", description, true);

        Query query = new Query().with(pageable);
        if (!criteriaList.isEmpty()) {
            query.addCriteria(new Criteria().orOperator(criteriaList.toArray(new Criteria[0])));
        }

        return query;
    }

    private void addCriteria(List<Criteria> criteriaList, String field, Object value, boolean isRegex) {
        if (value != null) {
            if (isRegex) {
                criteriaList.add(Criteria.where(field).regex(value.toString(), "i"));
            } else {
                criteriaList.add(Criteria.where(field).is(value));
            }
        }
    }

    @Override
    public Product getById(String id) {
        return mongoTemplate.findById(id, Product.class);
    }

    public void updateProductBalances(List<Product> products) {
        for (Product product : products) {
            Query query = new Query(Criteria.where("id").is(product.getId()));
            Update update = new Update().inc("stock", -1);
            mongoTemplate.updateFirst(query, update, Product.class);
        }
    }
}