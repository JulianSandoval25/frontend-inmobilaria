import { DepartamentoI } from './../../../interfaces/departamento-i';
import { DepartamentosService } from './../../../services/departamentos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private departamentosService:DepartamentosService){

  }
  items: DepartamentoI[]=this.departamentosService.items;
}
