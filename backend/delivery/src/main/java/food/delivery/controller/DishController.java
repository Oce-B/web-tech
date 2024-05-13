package food.delivery.controller;

import food.delivery.entity.Dish;
import food.delivery.service.DishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/dishes")
public class DishController {
    @Autowired
    private DishService dishService;

    @GetMapping
    public ResponseEntity<List<Dish>> getAllDishes() {
        List<Dish> dishes = dishService.getAllDishes();
        return new ResponseEntity<>(dishes, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Void> addDish(@RequestBody Dish dish) {
        dishService.addDish(dish);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateDish(@PathVariable long id, @RequestBody Dish dish) {
        dish.setId(id); // Ensure the ID matches the path variable
        dishService.updateDish(dish);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDish(@PathVariable long id) {
        dishService.deleteDishById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
