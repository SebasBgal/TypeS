interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc:"BlackBerry",
    precio: 500,

}

const pan:Producto={
    desc:"pan de miel",
    precio: 25,

}

function calculaisv(productos:Producto[]){
    let total = 0;

    productos.forEach(  (producto)=>{
             total += producto.precio;
    })

    return total*0.15;
}

const articulos = [telefono,pan];
const isv = calculaisv(articulos);

console.log("ISV es:",isv)