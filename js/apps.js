let opcionIngreso = parseInt(prompt('Bienvenido al Supermercado,ingrese la opción deseada:\n 1.Visitar Carniceria \n 2.Visitar Tecnología \n 3.Visitar Gastronomía \n 4.Ir a Caja \n 5.Salir'))
class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

}
let carniceria = [ //aca creamos el array con los objetos
    new Producto('Chorizo', 2000, 18),
    new Producto('Pollo', 8000, 12),
    new Producto('Matambre', 10000, 23),
    new Producto('Morcilla', 4000, 30),
]
let tecnologia = [
    new Producto('Celular', 20000, 18),
    new Producto('Tablet', 15000, 12),
    new Producto('Computadora', 230000, 23),
    new Producto('Telefono', 20000, 30),
]
let gastronomia = [
    new Producto('Empanadas', 8000, 18),
    new Producto('Pizza', 3500, 12),
    new Producto('Hamburguesa', 5000, 23),
    new Producto('Sandwich', 4000, 30),
]
const carritoCompra = [];
let opcionCompra;

switch (opcionIngreso) {
    case 1:
        for (i = 0; i < carniceria.length; i++) {
            opcionCompra = parseInt(prompt('¿Desea llevar ' + carniceria[i].nombre + ' con precio de $ ' + carniceria[i].precio + '?' + '\n Presione \n 1. para comprar \n 2. para avanzar'));
            compra();
        };
        break;
    case 2:
        for (i = 0; i < tecnologia.length; i++) {
            opcionCompra = parseInt(prompt('¿Desea llevar ' + tecnologia[i].nombre + ' con precio de $ ' + tecnologia[i].precio + '?' + '\n Presione \n 1. para comprar \n 2. para avanzar'));
            compra();
        };
        break;
    case 3:
        for (i = 0; i < gastronomia.length; i++) {
            opcionCompra = parseInt(prompt('¿Desea llevar ' + gastronomia[i].nombre + ' con precio de $ ' + gastronomia[i].precio + '?' + '\n Presione \n 1. para comprar \n 2. para avanzar'));
            compra();
        };
        break;
}

function compra() {
    if (!(isNaN(opcionCompra) || opcionCompra > 3)) {
        console.log("verdadero" + i + " " + "el valor ingresado fue " + opcionCompra);
    } else {
        console.log("falso" + i + " " + "el valor ingresado fue " + opcionCompra);
    }
}