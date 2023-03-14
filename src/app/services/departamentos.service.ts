import { DepartamentoCreate } from './../interfaces/departamentos-i';
import { DepartamentoI } from './../interfaces/departamento-i';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { Departamento } from '../interfaces/departamentos-i';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  items: DepartamentoI[]=[]
  constructor(private http:HttpClient) { }

  getDepartamento(id:string){
    const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
    };
    return this.http.get<any>('http://localhost:3000/department/'+id, httpOptions);
  }

  departamentos:any;
  getDepartamentos(){
    const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
    };
    return this.http.get<any>('http://localhost:3000/department?page=1', httpOptions);
  }

  getMisDepartamentos(){
    const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
    };
    return this.http.get<any>('http://localhost:3000/departmentpropietario', httpOptions);
  }

  crearDepartamento(departamento:DepartamentoCreate, imagenes: FileList){
    const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
    };

    const formData = new FormData();
    formData.append('calle', departamento.calle);
    formData.append('ciudad', departamento.ciudad);
    formData.append('provincia', departamento.provincia);
    formData.append('pais', departamento.pais);
    formData.append('codigoPostal', departamento.codigoPostal);
    formData.append('tipo', departamento.tipo);
    if(imagenes){
      for (let i = 0; i < imagenes.length; i++) {
        formData.append('fotos', imagenes[i]);
      }
    }
    console.log(formData.get('fotos'))

    return this.http.post('http://localhost:3000/department', formData, httpOptions)
  }

  deleteDepartment(id:string){
    const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
    };
     return this.http.delete<any>('http://localhost:3000/department/'+id, httpOptions);
  }
  

}
