import { DepartamentoI } from './../../../interfaces/departamento-i';
import { DepartamentosService } from './../../../services/departamentos.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private departamentosService:DepartamentosService, private router: Router){

  }
  items: DepartamentoI[]=this.departamentosService.items;

  onDetalleClick(idDepartamento: number){
    this.router.navigate(['dashboard/departamento', idDepartamento]);
  }
}
