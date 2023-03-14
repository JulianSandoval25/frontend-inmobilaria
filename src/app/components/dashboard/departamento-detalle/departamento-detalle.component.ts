import { DepartamentosService } from './../../../services/departamentos.service';
import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Departamento } from 'src/app/interfaces/departamentos-i';
import { DatePipe } from '@angular/common';


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
  formattedDate: string='';
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.departamentosService.getDepartamento(this.id).subscribe(res=>{
      this.departamento= res.deparment
      if(this.departamento){
        this.formattedDate = new DatePipe('en-US').transform(new Date(this.departamento.createdAt), 'yyyy-MM-dd HH:mm:ss') ?? "";
      }
    })
  }
}
