package food.delivery.entity;

import jakarta.persistence.*;
import java.util.HashSet;

@Entity
public class DeliveryService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String serviceType; // e.g., Delivroo, Uber Eats

    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;

    // Getters and Setters
}