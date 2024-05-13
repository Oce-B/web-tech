package food.delivery.controller;

import food.delivery.entity.Dish;
import food.delivery.entity.Restaurant;
import food.delivery.service.DishService;
import food.delivery.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/restaurants")
@CrossOrigin(origins = "http://localhost:4200/", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}, allowedHeaders = {"Authorization"})
public class RestaurantController {
    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private DishService dishService;

    @GetMapping
    public ResponseEntity<List<Restaurant>> getAllRestaurants() {
        List<Restaurant> restaurants = restaurantService.getRestaurants();
        return new ResponseEntity<>(restaurants, HttpStatus.OK);
    }

    @GetMapping("/{id}/dishes")
    public ResponseEntity<List<Dish>> getDishesByRestaurantId(@PathVariable long id) {
        List<Dish> dishes = dishService.getDishesByRestaurantId(id);
        if (dishes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(dishes, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Void> addRestaurant(@RequestBody Restaurant restaurant) {
        restaurantService.addRestaurant(restaurant);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateRestaurant(@PathVariable long id, @RequestBody Restaurant restaurant) {
        restaurant.setId(id); // Ensure the ID matches the path variable
        restaurantService.updateRestaurant(restaurant);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRestaurant(@PathVariable long id) {
        restaurantService.deleteRestaurantById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
