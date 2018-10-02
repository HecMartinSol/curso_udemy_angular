// se puede tipar tanto los parametros como el tipo del retorno
function getNumero(num:number = 100):string {
	return "el numero es " + num;
}

console.log(getNumero(2));