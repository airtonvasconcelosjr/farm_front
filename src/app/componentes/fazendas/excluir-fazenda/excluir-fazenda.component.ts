import { FazendaService } from './../fazenda.service';
import { Component, OnInit } from '@angular/core';
import { Fazenda } from '../fazenda';
import { ActivatedRoute, Router } from '@angular/router';
import { isJSDocThisTag } from 'typescript';

@Component({
  selector: 'app-excluir-fazenda',
  templateUrl: './excluir-fazenda.component.html',
  styleUrls: ['./excluir-fazenda.component.scss']
})
export class ExcluirFazendaComponent implements OnInit {

  fazenda: Fazenda = {
    nome: '',
    area: 0,
    centroide: 0,
    geometria: 0,
    id: 0
  }
  constructor(
    private service: FazendaService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((fazenda) => {
      this.fazenda = fazenda
    })
  }

  excluirFazenda() {
    if(this.fazenda.id) {
      this.service.excluir(this.fazenda.id).subscribe(() => {
        this.router.navigate(['/listarFazenda'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarFazenda'])
  }
}
