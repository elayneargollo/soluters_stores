package soluterstoreapi.soluterstoreapi.model;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "stories")
public class Stories {
    @Id
    @NotBlank(message = "Id cannot be null or empty")
    private String id;

    @NotBlank(message = "UserId cannot be null or empty")
    private String userId;

    private List<Order> order;
}