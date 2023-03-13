import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { MisPublicacionesComponent } from './mis-publicaciones/mis-publicaciones.component';
import { SearchComponent } from './../../components/dashboard/search/search.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentoDetalleComponent } from './departamento-detalle/departamento-detalle.component';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';

const routes: Routes = [
  {path:'',component:DashboardComponent, children:[
    {path: '', component:InicioComponent},
    {path: 'departamento/:id', component: DepartamentoDetalleComponent},
    {path: 'search', component:SearchComponent},
    {path: 'misPublicaciones', component:MisPublicacionesComponent},
    {path: 'configuracion', component:ConfiguracionComponent},
    {path: 'admin-usuarios', component:AdminUsuariosComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
