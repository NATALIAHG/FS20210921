describe('Calculadora',() =>{
    describe('Operaciones',() =>{   
        it('Sumar',() =>{
            let a=1, b=3
            let resultado
            resultado=Sumar(a,b)
            expect(resultado).toBe(4)
        })

        it('Resta',() =>{
            let a=5, b=3
            let resultado
            resultado=resta(a,b)
            expect(resultado).toBe(2)
        })

        it('Multiplicacion',() =>{
            let a=2, b=2
            let resultado
            resultado=multiplicacion(a,b)
            expect(resultado).toBe(4)
        })

        it('Division',() =>{
            let a=2, b=2
            let resultado
            resultado=division(a,b)
            expect(resultado).toBe(1)
        })       

        it('poner digito', () =>{
            let c = new Operacion();
            c.ponerdigito('3');
            expect(c.pantalla).toBe('3');
            c.ponerdigito('5');
            expect(c.pantalla).toBe('35');
            c.Calcular('-');
            expect(c.pantalla).toBe('35');
            c.ponerdigito('5');
            expect(c.pantalla).toBe('5');
            c.Calcular('*');
            expect(c.pantalla).toBe('30');
            c.ponerdigito('2');
            c.Calcular('=');
            expect(c.pantalla).toBe('60');
            
        });


    })




})