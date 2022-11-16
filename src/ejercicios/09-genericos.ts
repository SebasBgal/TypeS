
function queTiposoy<T>(argumento: T){
    return argumento;
}

let soyString = queTiposoy("hola mundo");
let soyNumero = queTiposoy(100);
let soyarray = queTiposoy([1,36,42,48,98,420]);
let soyexplecito = queTiposoy<number>(100);