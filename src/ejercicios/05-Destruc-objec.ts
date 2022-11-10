interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalles
}
interface Detalles{
    autor:string,
    year:number;
}

const reproductor:Reproductor={
    volumen:90,
    segundo:50,
    cancion:"Alive",
    detalles:{
        autor:"Disturbed",
        year:2008,
    }
}

// destructuracion de un objecto
// Se crea una constanten la cual entre llaves encierra los parametros del objeto en cuestion en este caso reproductor 
const {volumen,segundo,cancion,detalles}= reproductor;
// Para ingresar a un objeto anidado se debe accerder antes a el 
const {autor,year}= detalles;

// console.log("El volumen actual es:",volumen);
// console.log("El segundo actual es:",segundo);
// console.log("La cancion actual es:",cancion);
// console.log("El autor actual es:",autor);
// console.log("El año actual es:",year);

const poke:string[]=["infernape","repheryor","electrivire"];
const[p1,p2,p3]=poke;

console.log("pokemon 1:",p1);
console.log("pokemon 2:",p2);
console.log("pokemon 3:",p3);