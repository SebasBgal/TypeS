import { Producto,calculaisv } from "./06-desestructuracion-funcion";


const carritoCompras:Producto[]=[

    {
        desc:"panela",
        precio:100
    },
    {
        desc:"panela2",
        precio:200
    }
];

const [total,isv] = calculaisv(carritoCompras);


console.log("total es:", total);
console.log(" ISV", isv);