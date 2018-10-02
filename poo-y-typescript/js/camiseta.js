var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Decorador (simple): agrega funcionalidades a clases ya definidaas
// Se agrega a la clase con @estampar("...");
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo: " + logo);
        };
    };
}
//Clase (molde del objeto)
// Se usa CamelCase y debe tener el mismo nombre del fichero
//@estampar("GUCCI GANG")
var Camiseta = /** @class */ (function () {
    // Constructor
    function Camiseta(c, mod, mar, t, p) {
        this.color = c;
        this.modelo = mod;
        this.marca = mar;
        this.talla = t;
        this.precio = p;
    }
    // Métodos
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.setColor = function (c) {
        this.color = c;
    };
    return Camiseta;
}());
//HERENCIA
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (c) {
        this.capucha = c;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var cami = new Camiseta("rojo", "Corto", "nike", "L", 29.99);
console.log(cami);
cami.setColor("AZUL");
console.log(cami);
//console.log(cami.estampacion);
var suda = new Sudadera("rojo", "Corto", "nike", "L", 29.99);
suda.setCapucha(true);
suda.setColor("NEGRO");
console.log(suda);
