
export interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc:"BlackBerry",
    precio: 500

}

const pan:Producto={
    desc:"pan de miel",
    precio: 28

}

 export function calculaisv(productos:Producto[]):[number,number] {
    let total = 0;

    productos.forEach(  (producto)=>{
             total += producto.precio;
    })

    return [total,total*0.15];
}

// const articulos = [telefono,pan];
// const [total,isv] = calculaisv(articulos);

// console.log("ISV es:",isv)
// console.log("total",total)