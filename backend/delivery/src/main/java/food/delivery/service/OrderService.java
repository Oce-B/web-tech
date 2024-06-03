package food.delivery.service;

import food.delivery.entity.Order;
import food.delivery.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order placeOrder(Order order) {
        if (order == null || order.getOrderItems() == null || order.getOrderItems().isEmpty()) {
            throw new IllegalArgumentException("Order and Order Items must not be empty");
        }

        double totalAmount = order.getOrderItems().stream()
                .mapToDouble(item -> item.getPrice() * item.getQuantity())
                .sum();

        order.setTotalAmount(totalAmount);

        return orderRepository.save(order);
    }

    public List<Order> listAllOrders() {
        return orderRepository.findAll();
    }
}
