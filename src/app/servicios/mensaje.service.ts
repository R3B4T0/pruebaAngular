import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from '../clases/mensaje';

const url = 'http://localhost/backendphp/mensajes/'
@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(private http:HttpClient) { }

  mostrarMensajes(): Observable<any> {
    return this.http.get(url)
  }

  crearMensaje(mensaje): Observable<any> {
    return this.http.post(url, mensaje)
  }

  borrarMensaje(id): Observable<any> {
    return this.http.delete(url + id)
  }
}
