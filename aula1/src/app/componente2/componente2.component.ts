import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './componente2.component.html',
  styleUrl: './componente2.component.css'
})
export class Componente2Component {

  // Exibir texto
  exibirTexto:boolean = false;

  // Função para exibir ou ocultar texto
  visibilidadeTexto():void {
    this.exibirTexto = !this.exibirTexto
  }

  // Lista de nomes
  nomes:string[] = ['Larissa', 'Ricardo', 'Cléber', 'Viviane']

  // Linguagens de programação
  linguagem:string = '';
  
  // Função para alterar a linguagem
  alterarLinguagem():void {
    alert('Funcionou!')
  }

}
