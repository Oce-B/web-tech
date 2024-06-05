package food.delivery.repository;

import food.delivery.entity.Dish;
import food.delivery.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DishRepository extends JpaRepository<Dish, Long> {
    List<Dish> findByRestaurantId(Long restaurantId);
    //List<Dish> findByRestaurantId(Restaurant restaurant);
}
