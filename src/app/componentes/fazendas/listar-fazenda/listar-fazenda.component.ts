import { FazendaService } from './../fazenda.service';
import { Component, OnInit } from '@angular/core';
import { Fazenda } from '../fazenda';

@Component({
  selector: 'app-listar-fazenda',
  templateUrl: './listar-fazenda.component.html',
  styleUrls: ['./listar-fazenda.component.scss']
})
export class ListarFazendaComponent implements OnInit {

  listaFazendas: Fazenda[] = [];
  constructor(private service: FazendaService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaFazendas) => {
      this.listaFazendas = listaFazendas
    })
  }

}
