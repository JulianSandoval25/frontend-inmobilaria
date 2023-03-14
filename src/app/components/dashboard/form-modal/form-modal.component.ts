import { DepartamentosService } from './../../../services/departamentos.service';
import { DepartamentoCreate } from './../../../interfaces/departamentos-i';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent {
  form:FormGroup;
  mensaje: string='';
  
  
  constructor(private dialogRef: MatDialogRef<FormModalComponent>, 
    @Inject(MAT_DIALOG_DATA) public departamento: DepartamentoCreate,
    private departamentosService:DepartamentosService, private fb: FormBuilder) {
      this.form= this.fb.group({
        calle:['', Validators.required],
        ciudad:['', Validators.required],
        provincia:['', Validators.required],
        pais:['', Validators.required],
        codPostal:['', Validators.required],
        tipo: [''],
        archivo: [null, Validators.required]
      });
      
    }
  
  tipos: any[] = [
    {value: 'alquiler', viewValue: 'Alquiler'},
    {value: 'venta', viewValue: 'Venta'}
  ];
  selectedTipo: string = '';
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(){
    this.departamento.tipo=this.selectedTipo;
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

}
