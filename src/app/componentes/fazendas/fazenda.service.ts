import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fazenda } from './fazenda';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FazendaService {

  private readonly API = 'http://localhost:3000/fazendas'

  constructor(private http: HttpClient) { }

  listar(): Observable<Fazenda[]> { 
    return this.http.get<Fazenda[]>(this.API)
  }

  criar(fazenda: Fazenda): Observable<Fazenda> {
    return this.http.post<Fazenda>(this.API, fazenda)
  }

  editar(fazenda: Fazenda):Observable<Fazenda> {
    const url = `${this.API}/${fazenda.id}`
    return this.http.put<Fazenda>(url, fazenda)
  }

  excluir(id: number): Observable<Fazenda> {
    const url = `${this.API}/${id}`
    return this.http.delete<Fazenda>(url)
  }

  buscarPorId(id:number):Observable<Fazenda> {
    const url = `${this.API}/${id}`
    return this.http.get<Fazenda>(url)
  }
}
