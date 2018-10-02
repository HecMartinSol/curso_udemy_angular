import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
	name:"calculadora"
})
export class CalculadoraPipe implements PipeTransform {
	
	transform(v1 : any, v2 : any){
		let operaciones  = `
			suma: ${v1+v2} <br>
			resta: ${v1-v2} <br>
			multiplicacion: ${v1*v2} <br>
			division: ${v1/v2} <br>
		`;

		return operaciones;
	}
}