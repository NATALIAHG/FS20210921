fdescribe(`demos de las pruebas`,function(){
    describe(`calculo`, function(){
        it(`suma 2 + 2`,function(){
            let a = 2, b=2;
            let resultado;

            resultado=suma(a,b)

            expect(resultado).toBe(4);
        })
    })

    it(`Este pasa siempre`, function(){
        expect(true).toBeTruthy()
    })

    xit(`Este falla siempre`, function(){
        expect(true).not.toBeTruthy()
    })
})

describe(`otra suite`,function(){

})