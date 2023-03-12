import { DepartamentosService } from './../../../services/departamentos.service';
import { DepartamentoI } from './../../../interfaces/departamento-i';
import { DepartamentoCreate } from './../../../interfaces/departamentos-i';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent {

  constructor(private dialogRef: MatDialogRef<FormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DepartamentoI, @Inject(MAT_DIALOG_DATA) public departamento: DepartamentoCreate,private departamentosService:DepartamentosService) {}
  
  mensaje: string='';
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(){
    /* this.data.id= this.departamentosService.items.length+1;
    console.log(this.data);
    this.departamentosService.items.push(this.data); */
    console.log(this.departamento)
    this.departamentosService.crearDepartamento(this.departamento, this.selectedFiles).subscribe(
      (respuesta: any) => {
        this.mensaje = respuesta.mensaje;
        console.log(this.mensaje)
      },
      (error: any) => {
        console.error(error);
      }
    );
    this.dialogRef.close();
  }
  selectedFiles!: FileList;
  onFileSelected(event: any){
    this.selectedFiles = event.target.files;
  }

  imageUrl!:string;

  //subir multiples imagenes y videos andando
  handleFileInput(event: any) {
    let files = event.target.files;
    let i = 0;
    const readFile = (file:any) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event:any) => {
            this.imageUrl = event.target.result;
            this.data.fotos.push(this.imageUrl);
            i++;
            if (i < files.length) {
                readFile(files[i]);
            }
        }
    }
    readFile(files[i]);
}

}
