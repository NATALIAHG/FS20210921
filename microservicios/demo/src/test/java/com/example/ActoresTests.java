package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.engine.execution.InvocationInterceptorChain.VoidInterceptorCall;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.infraestructure.repositories.ActorRepository;
import com.example.ioc.Formato;
import com.example.ioc.Servicio;

@SpringBootTest
class ActoresTests {

	@Nested
	class Entidad{
		@Test
		public void actor_valido() {
			ActoresTests actoresTests = new Actor(1, "Pepito", "Grillo");
			assertTrue(actor.isValid());
		}
		
		@Test
		public void actor_invalido_nombre() {
			ActoresTests actoresTests = new Actor(1, "", "Grillo");
			assertTrue(actor.isInvalid());
		}
	}
	
	
}
	
}
