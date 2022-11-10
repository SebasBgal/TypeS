
let habilidades:string[]  = ["dash","ignite","counter"];

interface Personaje{
    nombre:string;
    hp:number;
    habilidades:string[];
    puebloNatal?:string;

}

const personaje:Personaje = {
    nombre: "twitch",
    hp:120,
    habilidades: ["dash","ignite","counter"]
}

console.table(personaje);