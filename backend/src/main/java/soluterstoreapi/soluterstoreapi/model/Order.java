package soluterstoreapi.soluterstoreapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Data
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "order")
public class Order {
    @Id
    @NotBlank(message = "Id cannot be null or empty")
    private String userId;

    @NotBlank(message = "Email cannot be null or empty")
    @Size(min = 1, max = 100, message = "Email must be between 1 and 100 characters")
    private String identifier;

    @NotBlank(message = "Email cannot be null or empty")
    @Size(min = 1, max = 100, message = "Email must be between 1 and 100 characters")
    private String productName;

    @NotNull(message = "Price cannot be null")
    @Min(value = 0, message = "Price must be greater than or equal to 0")
    private Double price;

    @NotNull(message = "Quantity cannot be null")
    @Min(value = 0, message = "Balance must be greater than or equal to 0")
    private Integer quantity;

    @NotNull(message = "Accomplished cannot be null")
    private Date accomplished;
}
