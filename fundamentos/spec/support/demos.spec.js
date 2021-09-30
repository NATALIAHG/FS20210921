/*

xdescribe(`demos de las pruebas`,function(){
    describe(`calculo`, function(){
        it(`suma 2 + 2`,function(){
            let a = 2, b=2;
            let resultado;

            resultado=suma(a,b)

            expect(resultado).toBe(4);
        })

        it(`suma negativo`,function(){
            let a = 2, b=-2;
            let resultado;

            resultado=suma(a,b)

            expect(resultado).toBe(0);
            pending()
        })

        
        describe('Sumas', function () {
            [[1, 2, 3], [2, 2, 4], [3, -2, 1]].forEach(item => {
                it(`Prueba que ${item[0]} mas ${item[1]} es 
                ${item[2]}`, () => expect(item[0] + item[1]).toBe(item[2]))
                });
        });
       


        it(`Esto queda pendiente con el pending`)
    })

    it(`Este pasa siempre`, function(){
        expect(true).toBeTruthy()
    })

    xit(`Este falla siempre`, function(){
        expect(true).not.toBeTruthy()
    })
})

xdescribe(`otra suite`,function(){

})

*/
