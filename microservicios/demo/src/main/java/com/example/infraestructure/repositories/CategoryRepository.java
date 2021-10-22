package com.example.infraestructure.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.domains.entities.Actor;
import com.example.domains.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
	List<Category>findBycategory_id(int categoryId);
	<T> List<T> findBycategoryIdNotNull(Class<T> type);
}
