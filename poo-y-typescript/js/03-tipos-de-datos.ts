//string
let cadena: string = "HECTOR";
console.log(cadena);

//number
let numero: number = 12;
console.log(numero);

//boolean
let vf: boolean = true;
console.log(vf);

//any
let cualquier : any = "Hola";
cualquier = 2;
console.log(cualquier);

//Array
let arr : Array<string> = ["23", "caca"];
let arr_alt :string[] = ["23", "caca"];

let arr2 : Array<any> = ["23", "caca", 23, true];
let arr2_alt : any[] = ["23", "caca", 23, true];
console.log(cadena);


// multi tipo
let cadena_o_numero : string | number = 33;
console.log(cadena_o_numero);

type alfanumerico = string | number;
let cadena_o_numero_alt : alfanumerico = 33;


// LET VS VAR
var n1 = 10;
var n2 = 12;
if (n1 == 10) {
	let n1 = 44;
	let n2 = 55;

	console.log(n1, n2);
}
console.log(n1, n2);