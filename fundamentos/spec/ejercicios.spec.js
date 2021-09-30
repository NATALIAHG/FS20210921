
//1. Crear una función que devuelva un numero aleatorio (Math.random()) dentro del rango dado.
xdescribe('Generamos numero aleatorio', function(){

    it('numero aleatorio',function(){
       let min=5;   
       let max=10;       
   
       expect(generarAleatorio(max,min)).toBeTrue(resultado);
    })
})

//2. Adivina el Número, generar un número entre el 0 y el 100,
// introducir un número e informar si es igual, mayor o menor.
// Hay un máximo de 10 intentos para encontrar el número que sea igual.

fdescribe('Adivina el numero del 0 al 100', function(){

    it('numero correcto',function(){
       let numCorrecto=2;     
       expect(numCorrecto).toBeTruthy();
    })

    it('numero Incorrecto', function(){
      let numIncorrecto='a';
      expect(+numIncorrecto).toBeNaN();
    })
})

//3.Crear una función que devuelva un array con el numero de elementos indicado, 
 //inicializados al valor suministrado.

 xdescribe('crearArray', function(){

    it('crearArray',function(){
       let tamaño=3;
       
       
       
    })
})


//5.Crear una función que valide un NIF
xdescribe('prueba validar dni', function(){

    it('numeros del dni',function(){
       let dni;     
       dni=validarDNI()
       expect(dni)
    })
})



//6Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".

//CON CLASE
//2. Adivina el Número, generar un número entre el 0 y el 100,
// introducir un número e informar si es igual, mayor o menor.
// Hay un máximo de 10 intentos para encontrar el número que sea igual.

class numero{
   constructor(aleatorio){
      this.aleatorio=aleatorio;
   }
   metodo
}