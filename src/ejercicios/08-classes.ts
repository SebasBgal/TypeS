
class Personanormal{
    constructor(
        public nombre:string,
        public direccion:string,
    ){}

}


class Hero extends Personanormal{

  constructor(
    public alterEgo:string,
    public edad:number,
  ){
    super("miguel","new york");
  }
}



const pepe = new Hero("pepe",60);
console.log(pepe);
