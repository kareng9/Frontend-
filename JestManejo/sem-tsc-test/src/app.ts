export function sumar(a: number, b:number):number{
    return a+b;
}

export function calcularTotalProducto(amount: number, price:number):number{
    return amount * price
}

export function calcularSubtotal(precio_uno: number, precio_dos: number, precio_tres: number ):number{
    return precio_uno + precio_dos + precio_tres
}

export function calcularTotal(subtotal:number):number{
    return (subtotal * 0.12) + subtotal 
}

interface IProducto extends IProductosDisponibles {
    cant: number;
}

interface IProductosDisponibles {
    cod?: string;
    nombreProducto: string;
    precio: number;
}

