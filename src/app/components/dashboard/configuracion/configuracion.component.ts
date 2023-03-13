import { UsuarioUpdate } from './../../../interfaces/usuario-i';
import { UsuarioService } from './../../../services/usuario.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {
  btnEliminar=false;
  usuario!: UsuarioUpdate;
  mail!:string;
  telefono!: string;
  password!:string;
  confirmPassword!: string;


  constructor(private fb: FormBuilder, 
    private usuarioService:UsuarioService, 
    private _snackBar: MatSnackBar, 
    private router: Router){
    
  }

  ngOnInit() {
    this.usuarioService.getUsuario().subscribe(
      res=>{
        this.usuario=res.user;
        this.mail=this.usuario.email;
        this.telefono=this.usuario.telefono
      }
    )
    
  }
  guardarCambiosGenerales(){
    console.log(this.mail)
    this.usuario.email=this.mail;
    this.usuario.telefono=this.telefono;
    console.log(this.usuario)
    const data = { email: this.mail, telefono: this.telefono };
    this.usuarioService.updateUsuario(data).subscribe(
      res=>{
        this.openSnackBar(res.message,'cerrar');
      })
  }
  cambiarPassword(){
    if(this.password==this.confirmPassword){
    }else{
      this.openSnackBar('Contraseñas no coinciden','cerrar')
    }
  }
  eliminar(){
    this.btnEliminar=true;
  }
  confirmar(){
    let confirmacion= confirm("Estas segudo de eliminar tu cuenta?")
    if(confirmacion){
      this.usuarioService.deleteUsuario(this.usuario._id).subscribe(
        res=>{
          this.openSnackBar(res.message,'cerrar')
          this.router.navigate(['login']);
        }
      );
    }
    this.btnEliminar=false;
  }
  cancelar(){
    this.btnEliminar=false;
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
