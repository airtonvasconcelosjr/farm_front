import { ActivatedRoute, Router } from '@angular/router';
import { FazendaService } from './../fazenda.service';
import { Fazenda } from './../fazenda';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-fazenda',
  templateUrl: './editar-fazenda.component.html',
  styleUrls: ['./editar-fazenda.component.scss']
})
export class EditarFazendaComponent implements OnInit {

  fazenda: Fazenda = {
    nome: '',
    area: 0,
    centroide: 0,
    geometria: 0,
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


  editarFazenda() {
    this.service.editar(this.fazenda).subscribe(() => {
      this.router.navigate(['/listarFazenda'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarFazenda'])
  }
}
