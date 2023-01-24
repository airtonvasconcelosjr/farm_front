import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasemapComponent } from './basemap/basemap.component';
import { FarmComponent } from './farm/farm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CriarFazendaComponent } from './componentes/fazendas/criar-fazenda/criar-fazenda.component';
import { ListarFazendaComponent } from './componentes/fazendas/listar-fazenda/listar-fazenda.component';
import { FazendaComponent } from './componentes/fazendas/fazenda/fazenda.component';
import { ExcluirFazendaComponent } from './componentes/fazendas/excluir-fazenda/excluir-fazenda.component';
import { EditarFazendaComponent } from './componentes/fazendas/editar-fazenda/editar-fazenda.component';

@NgModule({
  declarations: [
    AppComponent,
    BasemapComponent,
    FarmComponent,
    DashboardComponent,
    CriarFazendaComponent,
    ListarFazendaComponent,
    FazendaComponent,
    ExcluirFazendaComponent,
    EditarFazendaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
