import { LoginService } from './../../services/login.service';
import { LoginI } from './../../interfaces/login-i';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form:FormGroup;
  loading=false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private loginServicio: LoginService, private router: Router){
    this.form= this.fb.group({
      mail:['', Validators.required],
      password:['', Validators.required]
    });
  }
  Ingresar(){
    const usuarioLogin: LoginI={
      email: this.form.value.mail,
      password: this.form.value.password
    };
    
    //login
    this.loginServicio.login(usuarioLogin).subscribe(res=>{
      //console.log(res);
      this.openSnackBar('Ingreso Correcto','cerrar');
      this.fakeLoading();
    }, err=>{this.openSnackBar('Ingreso Incorrecto','cerrar')});
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
}
