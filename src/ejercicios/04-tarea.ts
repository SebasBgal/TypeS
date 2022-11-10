

interface SuperHero{
    name:string,
    age:number,
    address:Adres,
    mostradireccion:()=>string,
}
interface Adres{
        calle:string,
        pais:string,
        city:string,
}

const superhero:SuperHero={
    name:"spiderman",
    age:28,
    address:{
        calle:"Main st",
        pais:"usa",
        city:"NY"
    },
    mostradireccion(){
      return this.name + ", " + this.address.city  + ", " + this.address.pais;
    }
    
}

const address = superhero.mostradireccion();
console.log(address);