// se puede tipar tanto los parametros como el tipo del retorno
function getNumero(num) {
    if (num === void 0) { num = 100; }
    return "el numero es " + num;
}
console.log(getNumero(2));
