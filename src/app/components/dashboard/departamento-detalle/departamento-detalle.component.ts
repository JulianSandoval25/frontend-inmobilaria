import { DepartamentosService } from './../../../services/departamentos.service';
import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from 'src/app/interfaces/departamentos-i';
import { DatePipe } from '@angular/common';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-departamento-detalle',
  templateUrl: './departamento-detalle.component.html',
  styleUrls: ['./departamento-detalle.component.css']
})
export class DepartamentoDetalleComponent {
  constructor(private route: ActivatedRoute, 
    private departamentosService:DepartamentosService, 
    private usuarioService:UsuarioService,
    private router: Router){
  }
  id!:string;
  departamento!: Departamento;
  formattedDate: string='';
  rolAdmin= false;
  idusuario:string='';
  ngOnInit() {
    this.usuarioService.getUsuario().subscribe(res=>{
      this.rolAdmin = res.user.role=='admin';
      this.idusuario=res.user._id;
    })
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.departamentosService.getDepartamento(this.id).subscribe(res=>{
      this.departamento= res.deparment
      if(res.deparment.propietario._id==this.idusuario){
        this.rolAdmin=true;
      }
      
      if(this.departamento){
        this.formattedDate = new DatePipe('en-US').transform(new Date(this.departamento.createdAt), 'yyyy-MM-dd HH:mm:ss') ?? "";
      }
    })
  }

  eliminar(){
    let confirmacion =confirm('Estas segudo que deseas eliminar este departamento?');
    if(confirmacion){
      this.departamentosService.deleteDepartment(this.departamento._id).subscribe(
        res=>{
          
          this.router.navigate(['dashboard']);
        }
      )
    }
    
  }
}
