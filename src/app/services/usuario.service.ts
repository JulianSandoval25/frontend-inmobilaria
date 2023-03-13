import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  getUsuario(){
    const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
    };
    return this.http.get<any>('http://localhost:3000/user', httpOptions);
  }
  updateUsuario(data: any){
    const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
    };
     return this.http.put<any>('http://localhost:3000/user', data, httpOptions);
  }


  deleteUsuario(id:string){
    const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
    };
     return this.http.delete<any>('http://localhost:3000/user/'+id, httpOptions);
  }

  getUsuarios(){
    const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
    };
    return this.http.get<any>('http://localhost:3000/users', httpOptions);
  }
}
