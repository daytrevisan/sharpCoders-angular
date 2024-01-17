import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postagem } from '../modelos/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  // Construtor
  constructor(private http:HttpClient) { }

  // URLs
  private urlPostagem:string = 'https://jsonplaceholder.typicode.com/posts'

  // Método para retornar todas as postagens
  listarPostagens():Observable<Postagem[]> {
    // retorna um vetor de postagem
    return this.http.get<Postagem[]>(this.urlPostagem)
  }

  // Observable: executa requisições em períodos de tempo (necessário especificar o tipo de dado)
  // Suscriber: recebe o retorno das requisições
}
