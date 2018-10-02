import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'cursos',
	templateUrl: './cursos.component.html',
	styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
	public nombre : String;
	public followers : Number;

	// Este constructor es necesario para caturar parámetros
	constructor(
		private _route : ActivatedRoute,
		private _router : Router,
	) { }

	ngOnInit(){
		// Esto se pone para capturar los parámetros
		this._route.params.subscribe((params : Params) => {
			this.nombre = params.nombre;
			this.followers = +params.followers;
		});
	}

	redirigir(){
		
		this._router.navigate(['/zapatillas']);
	}

}
