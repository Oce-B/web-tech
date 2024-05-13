package food.delivery.entity;
import jakarta.persistence.*;
import lombok.*;



@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@Table(name = "restaurant_type")
public class RestaurantType {
    @Id
    @Column(unique=true)
    private String name;


}

