package com.example.infraestructure.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.domains.entities.Actor;
import com.example.domains.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
	// si no va a tener proyecciones ( manpulacion de las columnas) no le meto los metodos
	// si hago la ficha dame un resumen, y busco solo esos campos, con dts si son de entrada y salida o interface solo salido.
	//cuando hay pocas columnas no se suele hacer xq hay poco que seleccionar

	
	
	
	
}
