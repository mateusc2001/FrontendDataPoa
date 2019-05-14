import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { LinhaOnibusComponent } from './componentes/linha-onibus/linha-onibus.component';
import { ProcurarLinhasComponent } from './componentes/procurar-linhas/procurar-linhas.component';

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
  },
  {
    path: 'procurarLinhas',
    component: ProcurarLinhasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
