//productos
const productos=[
    {
        id: 1,
        nombre: "Procesador ryzen 5",
        precio: 30800,
        img: "img.png",
        },
    {
        id: 2,
        nombre: "Motherboard",
        precio: 17000,
        img: "img.png",
        },
    {
        id: 3,
        nombre: "Memoria ram 16GB",
        precio: 21000,
        img: "img.png",
        },  
    {
        id: 4,
        nombre: "Tarjeta grafica 3090",
        precio: 300000,
        img: "img.png",
        },    


];

function Producto(id, nombre, precio, img){
   this.id=id;
   this.nombre=nombre;
   this.precio=precio;
   this.img=img;
}
console.log(productos);
//cargando nuevo servicio 
const nuevoProducto= new Producto (5,"Disco SSD",10000,"img.png");

console.log(nuevoProducto);

function cargarProductol(arr, valor){
    arr.push(valor);
}

cargarProductol(productos, nuevoProducto)
console.log(productos)

//funciones para filtrar

function filtrarProducto(arr, filtro){
    const filtrado = arr.filter((producto)=>{
        return producto.nombre.includes(filtro);
    })

    return filtrado;
}

let dato=prompt("Ingresa un producto")

console.log(filtrarProducto(productos, "P"));

function filtrarPorPrecio(arr, filtro) {
    return arr.filter((producto)=>{
        return producto.precio >= filtro;
    })

}

let porPrecio=prompt("busca tu precio")

console.log(filtrarPorPrecio(productos, porPrecio))

function filtrar(arr, filtro, param){
    return arr.filter((el)=>{
        if(param == 'precio'){
            return el[param] <= parseFloat(filtro);
        }else{
           return el[param].includes(filtro); 
        }
    })
}

console.log(filtrar(productos, 30800, 'precio'));
console.log(filtrar(productos, "Tarjeta", 'nombre'));

const carrito=[];

const menorPrecio=filtrar(productos, 12000, 'precio');
console.log(carrito);
console.log(menorPrecio);

for (const producto of menorPrecio){
    cargarProductol(carrito, producto);
}
console.log(carrito);


    
         