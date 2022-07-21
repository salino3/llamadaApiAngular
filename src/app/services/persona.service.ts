import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  url = 'https://62ce95da826a88972dfe739a.mockapi.io/api/v1/clients';
  constructor(private http: HttpClient) {}

  getPersonas() {
    let heades = new Headers()
    .set(`Type-content`, `aplication/json`);
    let header = new HttpHeaders()
    .set('Type-content', 'aplications/json')
    return this.http.get(this.url, {headers: header})
  }
}
