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
  items: DepartamentoI[]=[
    {
      id:1,
      titulo:'Departamento 1',
      localidad: 'Rosario',
      telefono:'4562136',
      direccion:'San martin 6198',
      fotos:[
        'https://http2.mlstatic.com/D_NQ_NP_2X_670140-MLA53395547389_012023-F.webp',
        'https://http2.mlstatic.com/D_NQ_NP_2X_722101-MLA53395547375_012023-F.webp',
        'https://http2.mlstatic.com/D_NQ_NP_2X_899611-MLA53395547388_012023-F.webp'
      ]
      
    },
    {
      id:2,
      titulo:'Departamento 2',
      localidad: 'Rosario',
      telefono:'4815679',
      direccion:'Cordoba 2015',
      fotos:[
        'https://http2.mlstatic.com/D_NQ_NP_736073-MLA53381982933_012023-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_603331-MLA53381982940_012023-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_656535-MLA53381982926_012023-O.webp'
      ]
    },
    {
      id:3,
      titulo:'Departamento 3',
      localidad: 'San lorenzo',
      telefono:'4913569',
      direccion:'Santa fe 2168',
      fotos:[
        'https://http2.mlstatic.com/D_NQ_NP_616809-MLA53398666487_012023-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_716841-MLA53398666486_012023-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_845848-MLA53398666497_012023-O.webp'
      ]
    },
    {
      id:4,
      titulo:'Departamento 4',
      localidad: 'Rafaela',
      telefono:'4216591',
      direccion:'garzon 1815',
      fotos:[
        'https://http2.mlstatic.com/D_NQ_NP_631119-MLA53428933392_012023-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_840442-MLA53428933387_012023-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_704935-MLA53428933389_012023-O.webp'
      ]
    },
  ]
  constructor(private http:HttpClient) { }

  getDepartamento(id:number){
    return this.items.find(departamento => departamento.id === id);
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
  

}
