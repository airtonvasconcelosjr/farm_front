import { FazendaService } from './../fazenda.service';
import { Fazenda } from './../fazenda';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-criar-fazenda',
  templateUrl: './criar-fazenda.component.html',
  styleUrls: ['./criar-fazenda.component.scss']
})
export class CriarFazendaComponent implements OnInit {

  fazenda: Fazenda ={
    nome: '',
    area: 0,
    centroide: 0,
    geometria: 0,
  }

  constructor(
    private service: FazendaService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  
  criarFazenda() {
    this.service.criar(this.fazenda).subscribe(() => {
      this.router.navigate(['/listarFazenda'])
    })
  }
}
