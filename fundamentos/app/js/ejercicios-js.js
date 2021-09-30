//1. Crear una función que devuelva un numero aleatorio (Math.random()) dentro del rango dado.
//generar.addEventListener("click", generarAleatorio);

function generarAleatorio(max,min){   
    let resultado= Math.floor(Math.random() * (max-min+1) +min) 
    return resultado;
}


//2. Adivina el Número, generar un número entre el 0 y el 100, introducir un número e informar si es igual, mayor o menor. Hay un máximo de 10 intentos para encontrar el número que sea igual.

function generarAleatorioEntre0y100(min,max){

    let numaleatorioDec=Math.random((100-0)+1);
    let numaleatorio=(Math.round(numaleatorioDec)*0,1); //para redondear
    let cont=0;
    let minumero=0;
    prompt("El numero aleatorio es:".num);

    if(cont<11){
       
        if(numaleatorio<minumero){
            prompt('El num aleatorio es menor que tu numero');
            cont++;
        }else if(numaleatorio>minumero){
            prompt('El num aleatorio es mayor que tu numero');
            cont++;
        }else if(numaleatorio==minumero){
            prompt('Has acertado el numero');
            cont++;
        }else{
            prompt('Error de numero');
        }  
    }else{
        prompt("No te quedan intentos");
    }
}



/*
 //3.Crear una función que devuelva un array con el numero de elementos indicado, 
 //inicializados al valor suministrado.

 function crearArray(tamaño,numeros){
     let array=new Array;
     
     

 }



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


*/