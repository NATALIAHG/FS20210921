
class Operacion{  //calculadora
  
    constructor(){
        this.acumulado = 0;
        this.Opera ='mas';
        this.pantalla ='0';
        this.resultado = true; //
    }
    
    ponerdigito(num){
        if(this.pantalla =='0' || this.resultado){
            this.pantalla = num;
            this.resultado = false;
        }else{
            this.pantalla += num;
        }
    }

    Calcular(nuevaOperacion){
        let valor=parseFloat(this.pantalla);
        switch(this.Opera){
            case '+':this.acumulado += valor; break;           
            case '-':this.acumulado -= valor; break;
            case '*':this.acumulado *= valor; break;
            case '/':this.acumulado /= valor; break;
        }
        this.Opera = nuevaOperacion;
        this.resultado = true;
        this.pantalla = this.acumulado.toString();
    }

    


}







// function tecleado(tnum,tsuma,tresta){
//     let tnum=document.querySelector('#num1','#num2');//meto todas la teclas numericas
//     let tsuma=document.querySelector('#+');//meto tecla *
//     let tresta=document.querySelector('#-');//sigo asi con * /

//   //  let cnumeros=tnum.concat(tnum);

// }