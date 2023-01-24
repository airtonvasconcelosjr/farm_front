import { EditarFazendaComponent } from './componentes/fazendas/editar-fazenda/editar-fazenda.component';
import { ExcluirFazendaComponent } from './componentes/fazendas/excluir-fazenda/excluir-fazenda.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { FarmComponent } from './farm/farm.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { CriarFazendaComponent } from './componentes/fazendas/criar-fazenda/criar-fazenda.component';
import { componentFactoryName } from '@angular/compiler';
import { ListarFazendaComponent } from './componentes/fazendas/listar-fazenda/listar-fazenda.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'farm', component: FarmComponent },
  { path: 'criarFazenda', component: CriarFazendaComponent},
  { path: 'listarFazenda', component: ListarFazendaComponent},
  { path: 'fazendas/excluirFazenda/:id', component: ExcluirFazendaComponent},
  { path: 'fazendas/editarFazenda/:id', component: EditarFazendaComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
