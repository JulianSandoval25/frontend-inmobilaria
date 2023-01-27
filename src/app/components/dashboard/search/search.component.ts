import { Component } from '@angular/core';
import { DepartamentosService } from './../../../services/departamentos.service';
import { DepartamentoI } from './../../../interfaces/departamento-i';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private departamentosService: DepartamentosService){

  }
  searchText!: string;
  selectedFilter?: string;
  filters = [
    {name: 'Todos', value: 'all'},
    {name: 'Titulo', value: 'titulo'},
    {name: 'Localidad', value: 'localidad'},
  ];
  departamentos: DepartamentoI[]=this.departamentosService.items;
  departamentosFiltrados: DepartamentoI[]=[];
  filterArticles() {
    // lógica para filtrar los artículos
    if(this.selectedFilter=='all'){
      this.departamentosFiltrados = this.departamentos.filter(departamento => 
        departamento.titulo.toLowerCase().includes(this.searchText.toLowerCase()) ||
        departamento.localidad.toLowerCase().includes(this.searchText.toLowerCase())
    );
    }
    if(this.selectedFilter=='localidad'){
      this.departamentosFiltrados = this.departamentos.filter(departamento => 
        departamento.localidad.toLowerCase().includes(this.searchText.toLowerCase())
    );
    }
    if(this.selectedFilter=='titulo'){
      this.departamentosFiltrados = this.departamentos.filter(departamento => 
        departamento.titulo.toLowerCase().includes(this.searchText.toLowerCase())
    );
    }
    console.log(this.departamentosFiltrados);
  }
}
