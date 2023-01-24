import { Component, Input, OnInit } from '@angular/core';
import { Fazenda } from '../fazenda';

@Component({
  selector: 'app-fazenda',
  templateUrl: './fazenda.component.html',
  styleUrls: ['./fazenda.component.scss']
})
export class FazendaComponent implements OnInit {

  @Input() fazenda: Fazenda = {
    nome: 'estrela da morte',
    area: 1000,
    centroide: 200,
    geometria: 155,
    id: 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
