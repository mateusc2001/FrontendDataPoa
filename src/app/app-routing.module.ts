import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { AppComponent } from './app.component';
import { LinhaOnibusComponent } from './componentes/linha-onibus/linha-onibus.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent
  },
  {
    path: 'cliente',
    component: ClienteComponent
  },
  {
    path: 'linhaOnibus',
    component: LinhaOnibusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
