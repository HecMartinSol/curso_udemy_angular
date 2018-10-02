import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
	selector : "videojuego",
	/**
	template : `
		<h2>Componente de Videojuegos</h2>
		<ul>
			<li>GTA</li>
			<li>MARIO</li>
			<li>TEKKEN</li>
		</ul>
	`
	*/
	templateUrl : "./videojuego.component.html"
})	
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
	public titulo:string;
	public listado:string;

	constructor(){
		this.titulo = "Componente de videojuegos";
		this.listado = "Listado de juegos";
		
		//console.log("Cargado Videojuego");
	}

	
	ngOnInit(){
		//console.log("ONINIT videojuego");
	}

	ngDoCheck(){
		//console.log("DOCHECK cambiado videojuego");
	}

	ngOnDestroy(){
		//console.log("ONDESTROY eliminado videojuego");
	}

	cambiarTitulo(t:string):void{
		this.titulo = t;
	}
}