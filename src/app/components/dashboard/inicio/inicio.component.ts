import { DepartamentoI } from './../../../interfaces/departamento-i';
import { Departamento } from './../../../interfaces/departamentos-i';
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
  items:Departamento[]=[];
  ngOnInit() {
    this.departamentosService.getDepartamentos().subscribe(res => {
      this.items = res.departamentos;
    });
  }
  onDetalleClick(idDepartamento: string){
    this.router.navigate(['dashboard/departamento', idDepartamento]);
  }
}
