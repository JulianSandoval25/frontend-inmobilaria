import { Component } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { Reserva } from 'src/app/interfaces/reserva-i';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent {

  displayedColumns: string[] = ['email', 'calle', 'ciudad', 'fecha', 'hora', 'Accion'];
  items!:Reserva[];
  itemsUsuario!:Reserva[];
  data:any;
  constructor(private reservaService:ReservaService, private _snackBar: MatSnackBar, private router: Router){
    
  }

  ngOnInit(){
    this.reservaService.getReservas().subscribe(
      res=>{
        this.items= res.reservasPropietario
      },
      err=>{
        this.openSnackBar('Error al obtener reservas', 'Cerrar')
      }
    )
    this.reservaService.getReservasUsuarios().subscribe(
      res=>{
        this.itemsUsuario= res.reservas;
      },
      err=>{
        this.openSnackBar('Error al obtener reservas', 'Cerrar')
      }
    )
  }

  aceptar(idReserva: string){
    this.data={
      confirmada:true
    }
    this.reservaService.updateReservaById(idReserva, this.data).subscribe(
      res =>{
        this.openSnackBar(res.message, 'Cerrar');
      },
      err=>{
        this.openSnackBar(err.error.error, 'Cerrar');
      }
    )
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['dashboard/misReservas']);
    });
  }
  rechazar(idReserva: string){
    this.reservaService.deleteReserva(idReserva).subscribe(
      res=>{
        this.openSnackBar('Reserva eliminada', 'Cerrar');
      },
      err=>{
        this.openSnackBar(err.error.error, 'Cerrar');
      }
    );
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['dashboard/misReservas']);
    });
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
