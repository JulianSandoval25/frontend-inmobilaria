import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  crearReserva(data: any){
    const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
    };
    return this.http.post<any>(this.apiUrl+'reserva', data, httpOptions)
  }
}
