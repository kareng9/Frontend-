const newUID = (): string => Math.random().toString(36).slice(2)

class Product {
    codigo : string;
    name: string;
    marca: string;
    price: number;
    amount: number;
    total_producto: number;

    constructor(codigo: string, name: string, brand: string, price: number, amount:number){
        this.codigo = codigo;
        this.name = name;
        this.marca = brand;
        this.price = price;
        this.amount = amount;
        this.total_producto = this.price*this.amount;
        }
}

class Factura {
    productos : Array<Product> = [];  //Arreglo de Productos
    /*productos : Product[] = [] Tener un arreglo de productos*/
    subtotal: number;
    total: number;
    
    constructor(){
        this.productos = [];
        this.subtotal = 0;
        this.total = 0;

        }
    agregarNuevoProducto(p : Product){
        this.subtotal += p.price * p.amount;
        this.total = this.subtotal + (this.subtotal*0.12);
        this.productos.push(p);
    }
}

var p = new Product(`${newUID()}`,'Secadora','Remington',85,1);
var p2 = new Product(`${newUID()}`, 'Gafas','RayBan',107,2);
var p3 = new Product(`${newUID()}`, 'Audifonos','Samsung',12,1)
//console.log(p);
var f = new Factura();
f.agregarNuevoProducto(p);
f.agregarNuevoProducto(p2);
f.agregarNuevoProducto(p3);
console.log(f);