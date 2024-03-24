package soluterstoreapi.soluterstoreapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@Getter
@NoArgsConstructor
@AllArgsConstructor

@Document(collection = "users")
public class User {
    @Id
    @NotBlank(message = "Id cannot be null or empty")
    private String id;

    @NotBlank(message = "UserId cannot be null or empty")
    @Field("email")
    private String userId;
    @NotBlank(message = "Name cannot be null or empty")
    @Size(min = 1, max = 100, message = "Name must be between 1 and 100 characters")
    private String name;
    @NotNull(message = "Balance cannot be null")
    @Min(value = 0, message = "Balance must be greater than or equal to 0")
    private Double balance;
}





