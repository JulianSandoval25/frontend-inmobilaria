
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { LoginI } from '../interfaces/login-i';
import { ResponseLoginI } from '../interfaces/response-login-i';
import { ResponseRegistroI } from '../interfaces/response-registro-i';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authSubject$ = new BehaviorSubject<boolean>(false);
  private token!: string;
  isLoggedIn$ = this.authSubject$.asObservable();
  
  constructor( private http:HttpClient) { }
  ListaUsuarios:any;
  register(user: LoginI): Observable<ResponseRegistroI>{
    return this.http.post<ResponseRegistroI>(
      'http://localhost:3000/user', user).pipe(tap((res:ResponseRegistroI)=>{
        if(res){
          //guardar token
          this.guardarToken(res.token);
        }
      }
    ))
  }

  //metodo para iniciar session
  login(user: LoginI): Observable<ResponseLoginI>{
    return this.http.post<ResponseLoginI>(
      'http://localhost:3000/login', user).pipe(tap((res:ResponseLoginI)=>{
        if(res){
          //guardar token
          this.guardarToken(res.accessToken);
          console.log(this.conseguirToken());
        }
      }
    ))
  }
  //metodo para cerrar session
  logout(){
    this.token='';
    localStorage.removeItem("ACCESS_TOKEN");
  }
  
  private guardarToken(token:string){
    localStorage.setItem("ACCESS_TOKEN", token);
    this.token=token;
  }
  private conseguirToken(){
    if(!this.token){
      this.token=localStorage.getItem("ACCESS_TOKEN")!;
    }
    return this.token;
  }
  //metodo para mostrar todos los usuarios
  getUsuarios(){
    this.http.get('http://localhost:3000/users').subscribe((result:any)=>{
      console.log(result)
      this.ListaUsuarios=result;
    })
  }
  
}
