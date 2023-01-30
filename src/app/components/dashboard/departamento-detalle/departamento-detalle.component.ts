import { DepartamentosService } from './../../../services/departamentos.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartamentoI } from 'src/app/interfaces/departamento-i';

@Component({
  selector: 'app-departamento-detalle',
  templateUrl: './departamento-detalle.component.html',
  styleUrls: ['./departamento-detalle.component.css']
})
export class DepartamentoDetalleComponent {
constructor(private route: ActivatedRoute, private departamentosService:DepartamentosService){
  this.departamento={id:0, titulo:'', localidad:'', telefono:'' ,direccion:'', fotos:[] };
}
id!:number;
departamento: DepartamentoI;
ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(typeof id === 'string'){
      this.id=parseInt(id);
      let departamento=this.departamentosService.getDepartamento(parseInt(id));
      if(departamento){
        this.departamento = departamento;
        console.log(this.departamento)
      }
    }else{
      console.log('no es un string')
    }

  }
}
