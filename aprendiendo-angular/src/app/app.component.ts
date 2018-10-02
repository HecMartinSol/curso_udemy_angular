import { Component } from '@angular/core';
import { configuracion } from './models/configuracion'; // importa variables

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'FOOT LOCKER';
  public mostrarVideojuegos : boolean = true;
  public descripcion : string;
  public config;


  constructor(){
  	this.descripcion = configuracion.descripcion;
  	
  	this.config = configuracion;
  }

  setMostrarVideojuegos(status:boolean) : void{
  	this.mostrarVideojuegos = status;
  }
}
