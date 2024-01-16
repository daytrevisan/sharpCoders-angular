import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private rota:Router) {}
    
    // Função para sair do sistema
    sair():void {

      // Excluir o email do LocalStorage
      localStorage.removeItem('email');
    
      // Redirecionamento
      this.rota.navigateByUrl('/login');
    }

}
