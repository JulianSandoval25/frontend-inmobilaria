import { DepartamentosService } from './../../../services/departamentos.service';
import { DepartamentoI } from './../../../interfaces/departamento-i';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent {

  constructor(private dialogRef: MatDialogRef<FormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DepartamentoI, private departamentosService:DepartamentosService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(){
    console.log(this.data);
    this.departamentosService.items.push(this.data);
    this.dialogRef.close();
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
