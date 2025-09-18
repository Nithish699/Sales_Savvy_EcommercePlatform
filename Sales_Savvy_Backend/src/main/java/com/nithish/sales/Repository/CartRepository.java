package com.nithish.sales.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nithish.sales.Entity.CartItem;

import jakarta.transaction.Transactional;

public interface CartRepository extends JpaRepository<CartItem, Integer> {
	@Query("SELECT c FROM CartItem c WHERE c.user.userId = :userId AND c.product.productId = :productId")
	Optional<CartItem> findByUserAndProduct(int userId, int productId);
	
	@Query("SELECT COALESCE(SUM(c.quantity), 0) FROM CartItem c WHERE c.user.userId = :userId")
	int countTotalItems(int userId);
	
	@Query("SELECT c FROM CartItem c JOIN FETCH c.product p LEFT JOIN FETCH ProductImage pi ON p.productId = pi.product.productId WHERE c.user.userId = :userId")
    List<CartItem> findCartItemsWithProductDetails(int userId);
	
	@Modifying             
    @Transactional
	@Query("UPDATE CartItem c SET c.quantity = :quantity WHERE c.id = :cartItemId")
	void updateCartItemQuantity(int cartItemId, int quantity);
	
	@Transactional  // required for DELETE
    @Modifying      // tells Spring it's a modifying query
    @Query("DELETE FROM CartItem c WHERE c.user.userId = :userId AND c.product.productId = :productId")
    int deleteByUserIdAndProductId(@Param("userId") int userId, @Param("productId") int productId);

	void deleteAllByUser_UserId(int userId);

	
}
