import {calcularSubtotal, calcularTotal, calcularTotalProducto, sumar} from "./app"

describe("Funciones Randoms", () =>{
    test('debe sumar[10] y [20] y devolver [30]',()=>{
        
        //Arranque
        const primerValor = 10
        const segundoValor = 20
        const resultExpected = 30
        let result : number

        //Act
        result = sumar(primerValor, segundoValor)

        //Asert 
        expect(
            result
        ).toBe(resultExpected)

    })
})

  test('Debe multiplicar [2] y [5.60] y devolver [11.20]',()=>{
        //Arranque
        const cantidad = 2
        const precio = 5.60
        const resultExpected = 11.20
        let result : number

        //Act
        result = calcularTotalProducto(cantidad, precio)

        //Asert 
        expect(
            result
        ).toBe(resultExpected)
  })

  test('Debe sumar [2.50] y [5.60] y [7.20] y devolver [15.30]',()=>{
    //Arranque
    const precio_uno = 2.50
    const precio_dos = 5.60
    const precio_tres = 7.20
    const resultExpected = 15.30
    let result : number

    //Act
    result = calcularSubtotal(precio_uno, precio_dos, precio_tres)

    //Asert 
    expect(
        result
    ).toBe(resultExpected)
})

test('Debe multiplicar [15.30] y [0.12] y el resultado sumar con [15.30] y devolver [17.136]',()=>{
    //Arranque
    const subtotal = 15.30
    const resultExpected = 17.136
    let result : number

    //Act
    result = calcularTotal(subtotal)

    //Asert 
    expect(
        result
    ).toBe(resultExpected)
})


