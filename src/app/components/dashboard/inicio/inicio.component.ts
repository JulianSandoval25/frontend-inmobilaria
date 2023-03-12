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
  //items: DepartamentoI[]=this.departamentosService.items;
  items:Departamento[]=[];
  ngOnInit() {
    this.departamentosService.getDepartamentos().subscribe(res => {
      console.log(res.departamentos)
      this.items = res.departamentos;
      console.log(this.items)
      /* for (const item of this.items){
        console.log(item);
      } */
    });
  }
  onDetalleClick(idDepartamento: string){
    this.router.navigate(['dashboard/departamento', idDepartamento]);
  }
}
