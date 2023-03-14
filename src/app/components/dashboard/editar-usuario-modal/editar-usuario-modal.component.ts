import { Component, Inject  } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-usuario-modal',
  templateUrl: './editar-usuario-modal.component.html',
  styleUrls: ['./editar-usuario-modal.component.css']
})
export class EditarUsuarioModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditarUsuarioModalComponent>,
    private router: Router,
    private usuarioService:UsuarioService,){
    
  }
  datos:any;
  roles: any[] = [
    {value: 'user', viewValue: 'Usuario'},
    {value: 'admin', viewValue: 'Administrador'}
  ];
  selectedRole: string = '';
  close(): void {
    
    this.dialogRef.close();
  }
  
  confirm(): void {
    this.datos={
      email: this.data.email,
      telefono: this.data.telefono,
      role: this.selectedRole,
    }
    this.usuarioService.updateUsuarioById(this.data._id, this.datos).subscribe(res=>{
      console.log(res)
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/dashboard/admin-usuarios']);
    });
    })
    this.dialogRef.close();
  }
}
