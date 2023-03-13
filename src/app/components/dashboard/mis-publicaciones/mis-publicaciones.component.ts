import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/interfaces/departamentos-i';
import { DepartamentosService } from 'src/app/services/departamentos.service';

@Component({
  selector: 'app-mis-publicaciones',
  templateUrl: './mis-publicaciones.component.html',
  styleUrls: ['./mis-publicaciones.component.css']
})
export class MisPublicacionesComponent {
  constructor(private departamentosService:DepartamentosService, private router: Router){

  }

  items:Departamento[]=[];
  ngOnInit() {
    this.departamentosService.getMisDepartamentos().subscribe(res => {
      this.items = res.deparments;
    });
  }
  onDetalleClick(idDepartamento: string){
    this.router.navigate(['dashboard/departamento', idDepartamento]);
  }
}
