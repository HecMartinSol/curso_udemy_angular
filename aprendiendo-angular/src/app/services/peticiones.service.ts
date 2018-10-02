import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService {
	public url : String;
	constructor(
		public _http: HttpClient
	){
		this.url = "https://reqres.in/";
	}

	getUser(userID) : Observable{
		return this._http.get(this.url + "api/users/" + userID);
	}
}