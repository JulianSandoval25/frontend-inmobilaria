import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent {
  constructor(private usuarioService:UsuarioService, 
    private _snackBar: MatSnackBar,){

  }
  items:any[]=[];
  displayedColumns: string[] = ['email', 'telefono', 'role', 'Accion'];
  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(res => {
      this.items = res.usuarios;
      console.log(this.items)
    });
  }

  editar(){
    alert("editaste")
  }
  eliminar(){
    alert("eliminaste")
  }


}
