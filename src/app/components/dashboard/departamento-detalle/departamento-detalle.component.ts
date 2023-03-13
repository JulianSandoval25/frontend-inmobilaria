import { DepartamentosService } from './../../../services/departamentos.service';
import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Departamento } from 'src/app/interfaces/departamentos-i';

@Component({
  selector: 'app-departamento-detalle',
  templateUrl: './departamento-detalle.component.html',
  styleUrls: ['./departamento-detalle.component.css']
})
export class DepartamentoDetalleComponent {
  constructor(private route: ActivatedRoute, private departamentosService:DepartamentosService){
  }
  id!:string;
  departamento!: Departamento;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.departamentosService.getDepartamento(this.id).subscribe(res=>{
      this.departamento= res.deparment
      console.log(this.departamento.fotos)
    })
  }
}
