package com.examples;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;

class DniTest {

	Dni instanciaDni;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		instanciaDni= new Dni();
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	
	@ParameterizedTest
	@DisplayName("DNI Correcto")
	@CsvSource({"12345678Z"})
	void esNumero(String dni) {
		assertTrue(instanciaDni.esNumero(dni));
	}

	@ParameterizedTest
	@DisplayName("DNI Icorrecto")
	@CsvSource({"8","34653232","t","12345678T", "''"})
	void testNoIsNIF(String dni) {
		assertFalse(instanciaDni.esNumero(dni));
	}
	
	

	
	

}
