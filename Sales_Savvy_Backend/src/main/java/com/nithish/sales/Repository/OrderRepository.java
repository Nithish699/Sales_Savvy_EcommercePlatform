package com.nithish.sales.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nithish.sales.Entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, String> {
    // Custom query methods can be added here if needed
}
