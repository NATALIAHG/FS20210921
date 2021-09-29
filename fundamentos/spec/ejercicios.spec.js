
//1. Crear una función que devuelva un numero aleatorio (Math.random()) dentro del rango dado.
fdescribe('Generamos numero aleatorio', function(){

    it('numero aleatorio',function(){
       let min=5;   
       let max=10;  
       
       expect(generarAleatorio(max,min).toBeTrue());
    })
})

/*
//2. Adivina el Número, generar un número entre el 0 y el 100, introducir un número e informar si es igual, mayor o menor. Hay un máximo de 10 intentos para encontrar el número que sea igual.

fdescribe('Adivina el numero', function(){

    it('numero',function(){
       let aleatorio;     
       aleatorio=generarAleatorioEntre0y100();
       expect(aleatorio)
    })
})




//5.Crear una función que valide un NIF
fdescribe('prueba validar dni', function(){

    it('numeros del dni',function(){
       let dni;     
       dni=validarDNI()
       expect(dni)
    })
})

*/