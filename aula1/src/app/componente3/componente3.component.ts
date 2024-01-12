import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  standalone: true,
  imports: [],
  templateUrl: './componente3.component.html',
  styleUrl: './componente3.component.css'
})
export class Componente3Component {
  
  // Variável de média
  media:number = 8;

  // Variável de linguagem
  linguagem:string = 'CSS';

  // Vetor de nomes
  nomes:string[] = ['Renata', 'Júlio'];
}
