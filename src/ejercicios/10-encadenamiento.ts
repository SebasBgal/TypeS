interface pasajero {
    nombre: string;
    hijos?:string[]
}

const Maria:pasajero = {
    nombre : "maria",
    hijos: ["juan","amrcela"]
}

const Maria2:pasajero = {
    nombre : "mariano",
}

function imprimeHijos(x:pasajero): void{
  const cuantosHijos = x.hijos?.length|| 0;
  console.log(cuantosHijos)
}

imprimeHijos(Maria2);
imprimeHijos(Maria);
