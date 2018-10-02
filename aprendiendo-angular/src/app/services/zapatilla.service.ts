import { Injectable } from '@angular/core';
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService {
	public zapatillas : Array<Zapatilla>;
	
	constructor() {
		this.zapatillas = [
			new Zapatilla("Reebok classic",80,"Reebok", "Blanco", true),
			new Zapatilla("Nike runner MD",100,"Nike", "Azul", true),
			new Zapatilla("Adidas Yezzy",180,"Adidas", "Crema", false),
			new Zapatilla("Stan smith",99.99,"Adidas", "Blanc y verde", false)
		];
	}

	getTexto() : String{
		return "Hola Zapatilla desde servicio";
	}

	getZapatillas() : Array<Zapatilla>{

		return this.zapatillas;
	}
}