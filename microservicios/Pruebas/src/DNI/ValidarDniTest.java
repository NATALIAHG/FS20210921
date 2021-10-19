package DNI;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class ValidarDniTest {

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	@DisplayName("Extraer letra")
	void testExtraerLetraDNI() {
		
		assertEquals('Z', ValidarDni.extraerLetraDNI("12345678Z") );
	}
	
	@Test
	@DisplayName("Extraer numero")
	void testExtraerNumeroDNI() {
	    assertEquals(12345678, ValidarDni.extraerNumeroDNI("12345678Z"));
	   
	}
	
	@Test
	@DisplayName("Calcular letra")
	void testCalcularLetraDNI() {
		assertEquals('Z', ValidarDni.calcularLetraDNI(12345678) );
	}
	
	

	@Test
	@DisplayName("DNI valido")
	void testDNIvalido() {
		assertTrue(ValidarDni.validarDNI("12345678Z"));
	
	}

	
	@Test
	@DisplayName("DNI invalido")
	void testDNIinvalido() {
		assertFalse(ValidarDni.validarDNI("12345678A"));
		assertFalse(ValidarDni.validarDNI("123"));
		assertFalse(ValidarDni.validarDNI("123123123123"));
	
	}
	
	

}
