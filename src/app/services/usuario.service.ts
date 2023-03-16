import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  getUsuario(){
    const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
    };
    return this.http.get<any>(this.apiUrl+'user', httpOptions);
  }
  updateUsuario(data: any){
    const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
    };
     return this.http.put<any>(this.apiUrl+'user', data, httpOptions);
  }
  updateUsuarioById(id: string, data: any){
    const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
    };
     return this.http.put<any>(this.apiUrl+'userid/'+id, data, httpOptions);
  }


  deleteUsuario(id:string){
    const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
    };
     return this.http.delete<any>(this.apiUrl+'user/'+id, httpOptions);
  }

  getUsuarios(){
    const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
    };
    return this.http.get<any>(this.apiUrl+'users', httpOptions);
  }
}
