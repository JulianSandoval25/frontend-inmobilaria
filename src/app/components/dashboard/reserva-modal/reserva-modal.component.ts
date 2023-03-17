import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ReservaService } from './../../../services/reserva.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reserva-modal',
  templateUrl: './reserva-modal.component.html',
  styleUrls: ['./reserva-modal.component.css']
})
export class ReservaModalComponent {

  fechaSeleccionada!: Date;
  horaSeleccionada!: string;
  constructor(private dialogRef: MatDialogRef<ReservaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reservaService:ReservaService,
    private _snackBar: MatSnackBar,
    private fb: FormBuilder){

  }
  confirm(){
    let dataReserva={
      usuario:this.data.idUsuario,
      propiedad: this.data.idPropiedad,
      //fecha: this.fechaSeleccionada,
      hora: this.horaSeleccionada
    }
    this.reservaService.crearReserva(dataReserva).subscribe(
      res=>{
        this.openSnackBar(res.message ,'cerrar');
        this.dialogRef.close();
      },
      error=>{
        this.openSnackBar('Error al crear reserva' ,'cerrar');
        this.dialogRef.close();
      }
    )
  }
  close(){
    this.dialogRef.close();
  }
  onDateChange(event: MatDatepickerInputEvent<Date>) {
    this.fechaSeleccionada = event.value ?? new Date;
  }

  onTimeChange(event: Event) {
    this.horaSeleccionada = (event.target as HTMLInputElement).value;
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
