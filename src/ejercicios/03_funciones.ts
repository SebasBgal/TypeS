function sumar(a:number,b:number):number{
    return a+b;
}

const sumarFlecha = (a:number, b:number):number => {
    return a+b;
}

function multiplicar(numero:number,otronumero?:number ,base:number=2){
    return numero*base;
}

interface PersonajeLOL{
    name:string,
    pv:number,
    mostrarhp:()=>void,
}

function curar(personaje:PersonajeLOL,curacion:number):void{
    personaje.pv = curacion;

    console.log(personaje);
  
}

const nuevoepersonaje:PersonajeLOL={
    name:"twitch",
    pv:50,
    mostrarhp(){
        console.log("puntos de vida:",this.pv)
    }
}

curar(nuevoepersonaje,100);

nuevoepersonaje.mostrarhp();