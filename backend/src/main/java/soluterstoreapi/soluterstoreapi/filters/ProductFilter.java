package soluterstoreapi.soluterstoreapi.filters;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
@Data
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ProductFilter {
    private String name;
    private Double price;
    private String description;
}
