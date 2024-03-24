package soluterstoreapi.soluterstoreapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.Size;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "products")
public class Product {
    @Id
    @NotBlank(message = "Id cannot be null or empty")
    public String id;

    @NotBlank(message = "Name cannot be null or empty")
    @Size(min = 1, max = 100, message = "Name must be between 1 and 100 characters")
    public String name;

    public Double price;

    @NotBlank(message = "Description cannot be null or empty")
    @Size(min = 10, max = 500, message = "Description must be between 10 and 500 characters")
    public String description;

    public Integer stock;

    public String image;
}
