import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatilla.service";

@Component({
	selector : "zapatillas",
	templateUrl : "./zapatillas.component.html",
	providers : [ ZapatillaService ]
})
export class ZapatillasComponent implements OnInit{
	public titulo:string = "ZAPATILLAS";
	public zapatillas : Array<Zapatilla>;
	public marcas : String[];
	public marca_nueva : String;


	constructor(
		private _zapatillaService : ZapatillaService
	){
		this.marcas = new Array();
		this.marca_nueva = "";
	}

	ngOnInit(){
		this.zapatillas = this._zapatillaService.getZapatillas();
		// alert(this._zapatillaService.getTexto());
		this.loadMarcas();
	}

	loadMarcas(){
		this.zapatillas.forEach((zapatilla, i) => {
			if (this.marcas.indexOf(zapatilla.marca) == -1)
				this.marcas.push(zapatilla.marca);
		});
		console.log(this.marcas);
	}

	addMarca(){
		if (this.marca_nueva != "" && this.marcas.indexOf(this.marca_nueva) == -1){
			this.marcas.push(this.marca_nueva);
			this.marca_nueva = "";
		}
	}

	borrarMarca(i : number){
		if (this.marcas[i] != null)
			this.marcas.splice(i,1);
	}
}