import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { EditarUsuarioModalComponent } from '../editar-usuario-modal/editar-usuario-modal.component';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent {
  constructor(private usuarioService:UsuarioService, 
    private _snackBar: MatSnackBar,
    private router: Router,
    private dialog: MatDialog){

  }
  items:any[]=[];
  displayedColumns: string[] = ['email', 'telefono', 'role', 'Accion'];
  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(res => {
      this.items = res.usuarios;
    });
  }

  editar(data: any){
    const dialogRef = this.dialog.open(EditarUsuarioModalComponent, {
      data: data
    });
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/dashboard/admin-usuarios']);
    });
    
  }
  eliminar(data: any){
    let confirmacion= confirm(`Estas segudo que deseas eliminar a ${data.email}?`)
    if(confirmacion){
      this.usuarioService.deleteUsuario(data._id).subscribe(
        res=>{
          this.openSnackBar(res.message, 'Cerrar')
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['dashboard/admin-usuarios']);
          });
        }
      )
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,
      {
        horizontalPosition: "center",
        verticalPosition: "bottom",
        duration: 5 *1000
      });
  }
  

}
