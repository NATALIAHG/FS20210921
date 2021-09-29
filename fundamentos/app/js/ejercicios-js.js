//1. Crear una función que devuelva un numero aleatorio (Math.random()) dentro del rango dado.
generar.addEventListener("click", generarAleatorio);
function generarAleatorio(max,min){
     max=document.getElementById('max').value;
     min=document.getElementById('min').value;
    let resultado=Math.floor(Math.random() * (max-min+1) +min)
    document.getElementById('mostrar').innerHTML+=resultado;
}


//2. Adivina el Número, generar un número entre el 0 y el 100, introducir un número e informar si es igual, mayor o menor. Hay un máximo de 10 intentos para encontrar el número que sea igual.

function generarAleatorioEntre0y100(){

    let numaleatorio=Math.random((100-0)+1);
    let minumero=document.getElementById('minum').value;

    if(minumero>numaleatorio){
        prompt('Es un numero menor')
    }else if(minumero<numaleatorio){
        prompt('El numero es mayor')
    }else{
        prompt('Has acertado el numero')
    }
}
 //3.Crear una función que devuelva un array con el numero de elementos indicado, inicializados al valor suministrado.

 //4.Crear una función que devuelva un determinado número de números primos.

//5.Crear una función que valide un NIF
comprobar.addEventListener("click",validarDNI);
function validarDNI(){
    var patron=/^\d{8}-\D{1}$/;

    if(patron.test(dni.value)){
        document.getElementById("demo").innerHTML+="DATOS CORRECTOS";
    }else{
        document.getElementById("demo").innerHTML+="DATOS INCORRECTOS, DNI NO VALIDO";
    }
}

//6Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".