package com.nithish.sales.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nithish.sales.Entity.JWTToken;

public interface JWTTokenRepository extends JpaRepository<JWTToken, Integer> {
	 // Custom query to find tokens by user ID
	    @Query("SELECT t FROM JWTToken t WHERE t.user.userId = :userId")
	    JWTToken findByUserId(@Param("userId") int userId);

	}