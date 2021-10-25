package com.example.infraestructure.repositories;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.domains.entities.Category;
import com.example.domains.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
	// si no va a tener proyecciones ( manpulacion de las columnas) no le meto los metodos
	// si hago la ficha dame un resumen, y busco solo esos campos, con dts si son de entrada y salida o interface solo salido.
	//cuando hay pocas columnas no se suele hacer xq hay poco que seleccionar

	//List<Category> findByFirstNameStartingWithOrderByLastNameDesc(String prefijo);
//	List<Category> findByLastUpdateGreaterThan(LocalDate fecha);
	
//	List<CategoryDTO> findByCategoryIdNotNull();
//	List<CategoryShort> findByCategoryIdNotNull();
	<T> List<T> findByCategoryIdIsNotNull(Class<T> type);
	<T> Iterable<T> findByCategoryIdIsNotNull(Sort sort, Class<T> type);
	<T> Page<T> findByCategoryIdIsNotNull(Pageable pageable, Class<T> type);
	
	@Query("FROM Category a WHERE a.lastUpdate > ?1")
	List<Category> laMia(Date fecha);
	
	
}
