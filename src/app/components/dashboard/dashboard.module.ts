import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ImageViewerComponentComponent } from './image-viewer-component/image-viewer-component.component';
import { SearchComponent } from './search/search.component';
import { FormModalComponent } from './form-modal/form-modal.component';
import { DepartamentoDetalleComponent } from './departamento-detalle/departamento-detalle.component';
import { MisPublicacionesComponent } from './mis-publicaciones/mis-publicaciones.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';
import { EditarUsuarioModalComponent } from './editar-usuario-modal/editar-usuario-modal.component';
import { GalleriaImagenesComponent } from './galleria-imagenes/galleria-imagenes.component';
import { ReservaModalComponent } from './reserva-modal/reserva-modal.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';



@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    InicioComponent,
    ImageViewerComponentComponent,
    SearchComponent,
    FormModalComponent,
    DepartamentoDetalleComponent,
    MisPublicacionesComponent,
    ConfiguracionComponent,
    AdminUsuariosComponent,
    EditarUsuarioModalComponent,
    GalleriaImagenesComponent,
    ReservaModalComponent,
    MisReservasComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
