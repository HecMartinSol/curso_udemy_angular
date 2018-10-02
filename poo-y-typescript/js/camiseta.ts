// Interface
interface CamisetaBase{
	getColor();
	setColor(c:string);
}

// Decorador (simple): agrega funcionalidades a clases ya definidaas
// Se agrega a la clase con @estampar("...");
function estampar(logo : string) {
	return function(target : Function) {
		target.prototype.estampacion = function():void{
			console.log("Camiseta estampada con el logo: " + logo);
		}
	}
}

//Clase (molde del objeto)
// Se usa CamelCase y debe tener el mismo nombre del fichero
//@estampar("GUCCI GANG")
class Camiseta implements CamisetaBase{
	
	// Propiedades
	private color:string;
	private modelo:string;
	private marca:string;
	private talla:string;
	public precio : number;
	
	// Constructor
	constructor(c:string, mod:string, mar:string, t:string, p:number) {
		this.color = c;
		this.modelo = mod;
		this.marca = mar;
		this.talla = t;
		this.precio = p;
	}

	// Métodos
	public getColor() {
		return this.color;
	}
	public setColor(c:string){
		this.color = c;
	}
}

//HERENCIA
class Sudadera extends Camiseta {
	public capucha:boolean;


	public setCapucha(c:boolean){
		this.capucha = c;
	}	
	public getCapucha() : boolean{
		return this.capucha;
	}
}

var cami = new Camiseta("rojo","Corto","nike", "L", 29.99);
console.log(cami);
cami.setColor("AZUL");
console.log(cami);
//console.log(cami.estampacion);



var suda = new Sudadera("rojo","Corto","nike", "L", 29.99);
suda.setCapucha(true);
suda.setColor("NEGRO");

console.log(suda);