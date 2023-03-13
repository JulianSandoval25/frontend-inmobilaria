import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/interfaces/usuario-i';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form:FormGroup;
  loading=false;
  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private loginServicio: LoginService, private router: Router){
    this.form= this.fb.group({
      //usuario: ['', Validators.required],
      mail: ['', Validators.required],
      telefono: ['', Validators.required],
      //dni: ['', Validators.required],
      password:['', Validators.required],
      confirmarContra:['', Validators.required]
    });

  }
  registrar(){
    const usuarioRegistro: UsuarioI={
      //usuario: this.form.value.usuario,
      email: this.form.value.mail,
      telefono: this.form.value.telefono,
      //dni: this.form.value.dni,
      password: this.form.value.password,
      confirmarPassword: this.form.value.confirmarContra
    };
    //registro
    if(usuarioRegistro.password==usuarioRegistro.confirmarPassword){
      this.loginServicio.register(usuarioRegistro).subscribe(res=>{
        console.log(res);
        this.openSnackBar('Registro correcto','cerrar');
        this.fakeLoading();
      }, err=>{this.openSnackBar('registro Incorrecto','cerrar')})
    }else{
      this.openSnackBar('Contraseñas no coinciden','cerrar')
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
  fakeLoading(){
     this.loading=true;
     setTimeout(() => {
      this.loading=false;
      this.router.navigate(['dashboard'])
     }, 1500)
  }


  //los la subida de imagen no esta implementada porque json-server solo trabaja con json
  url="../../../assets/img/usuario.png";
  bandfoto=false;
  //metodos para subir imagenes
  onFileSelected(event: any) {
  const imagen = event.target.files[0];
  if (imagen.type.includes(['image'])) {
    var reader= new FileReader();
    reader.readAsDataURL(imagen);
    reader.onload=(event:any)=>{
      this.url=event.target.result;
      console.log(this.url);
    }
    this.bandfoto=true;
    
  }else{
    this.openSnackBar('Formato no valido','cerrar')
  }  
  }
  
  items!:any[];
  pastePicture(event: any) {
    
    this.items=event.clipboardData.items;
    console.log(this.items)
    for (const item of this.items) {
      if (item.type.indexOf('image') === 0) {
        var reader= new FileReader();
        reader.readAsDataURL(item.getAsFile());
        reader.onload=(event:any)=>{
          this.url=event.target.result;
        }
        this.bandfoto=true;
      }
    }
  }

  
}
