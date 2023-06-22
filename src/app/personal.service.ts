import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Personal } from './personal';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  //Url para obtener el listado de personal
  private baseURL = "http://localhost:8080/ms-mugiwaras/api/personal/listar";
  
  constructor(private httpClient: HttpClient) { }

obtenerListaDePersonal(): Observable<Personal[]> {
  return this.httpClient.get<Personal[]>(`${this.baseURL}`);
}

registrarPersonal(personal: Personal): Observable<Object> {
  return this.httpClient.post(`${this.baseURL}`, personal);
}

actualizarPersonal(idpersonal: number, personal: Personal): Observable<Object> {
  return this.httpClient.put(`${this.baseURL}/${idpersonal}`, personal);
}

obtenerPersonalPorId(idpersonal: number): Observable<Personal> {
  return this.httpClient.get<Personal>(`${this.baseURL}/${idpersonal}`);
}

eliminarPersonal(idpersonal: number): Observable<Object> {
  return this.httpClient.delete(`${this.baseURL}/${idpersonal}`);
}
}

