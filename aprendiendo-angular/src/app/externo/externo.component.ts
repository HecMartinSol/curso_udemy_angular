import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
	selector: 'app-externo',
	templateUrl: './externo.component.html',
	styleUrls: ['./externo.component.css'],
	providers : [PeticionesService]
})
export class ExternoComponent implements OnInit {
	public user : any;
	public userID : any;
	public fecha : any;

	constructor(
		private _peticionesService : PeticionesService
	) { 
		this.userID = 1;
		this.fecha = new Date(2019,5,20);
	}

	ngOnInit() {
		this.cargarUsuario();
	}

	cargarUsuario(){
		this._peticionesService.getUser(this.userID).subscribe(
			result => {
				this.user = result.data;
			},
			error => {
				console.log(<any>error);
			}
		);

	}

}
