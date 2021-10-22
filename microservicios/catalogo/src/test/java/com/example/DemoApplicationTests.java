package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.engine.execution.InvocationInterceptorChain.VoidInterceptorCall;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.infraestructure.repositories.ActorRepository;
import com.example.ioc.Formato;
import com.example.ioc.Servicio;

@SpringBootTest
class DemoApplicationTests {

	@Autowired
	@Qualifier("uno") // como tengo dos implimentaciones para un servicio los identifico y para que sepa cual coger. UN SERVICIO UNA IMPLEMENTACION, si hay dos especificar)
		// si una interface la quiero para cosas diferentes uso el aqualifer
	Servicio srv;  // esto despues de crear la interface o sin interface pongp ServcioImpl, pero tengo clase y me ata, mejor interface
	
	
	@Autowired
	Formato formato;
	
	@Test
	void inyeccionesTaza() {
		assertEquals("Soy una taza", srv.saluda()); 
	}

	@Test
	void inyeccionesTetera() {
		assertEquals("Soy una tetera", srv.saluda()); 
	}
	
	@Autowired
	ActorRepository dao;
	
	public void run(String... args) throws Exception {
		
		System.out.println(dao.getById(1));
		
		//dao.findAll().forEach(System.out::println);
		
		
	}
	
}
