import { DepartamentoI } from './../../../interfaces/departamento-i';

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormModalComponent } from '../form-modal/form-modal.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public dialog: MatDialog){

  }
  opened!: boolean;
  shouldRun = false;

  openModal() {
    const dialogRef = this.dialog.open(FormModalComponent, {
      width: '500px',
      height:'700px',
      data:{titulo:'', localidad:'', telefono: '', direccion: '', fotos: []}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal ha sido cerrado');
    });
  }
}