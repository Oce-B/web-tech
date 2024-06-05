package food.delivery.service;

import food.delivery.entity.Dish;
import food.delivery.repository.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DishService {
    @Autowired
    private DishRepository dishRepository;

    public List<Dish> getAllDishes() {
        return dishRepository.findAll();
    }

    public Optional<Dish> getDishById(Long id) {
        return dishRepository.findById(id);
    }

    public List<Dish> getDishesByRestaurantId(long restaurantId) {
        return dishRepository.findByRestaurantId(restaurantId);
    }

    public Dish addDish(Dish dish) {
        dish.setId(null);
        return dishRepository.save(dish);
    }

    public void updateDish(Dish dish) {
        dishRepository.save(dish);
    }

    public void deleteDishById(long id) {
        dishRepository.deleteById(id);
    }
}
