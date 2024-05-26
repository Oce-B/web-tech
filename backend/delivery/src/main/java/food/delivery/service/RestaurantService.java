package food.delivery.service;

import food.delivery.entity.Restaurant;
import food.delivery.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestaurantService {
    @Autowired
    private RestaurantRepository restaurantRepository;

    public List<Restaurant> getRestaurants(){
        return restaurantRepository.findAll();
    }

    public Optional<Restaurant> getRestaurantById(long id) {
        return restaurantRepository.findById(id);
    }
    public void addRestaurant(Restaurant restaurant){
        restaurantRepository.save(restaurant);
    }

    public void updateRestaurant(Restaurant restaurant){
        restaurantRepository.save(restaurant);
    }
    public void deleteRestaurantById(long id) {
        restaurantRepository.deleteById(id);
    }
}
