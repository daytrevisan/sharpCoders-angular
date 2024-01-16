import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // Construtor -> inicializador
  constructor(private rota:Router) {

  }

  // Formulário
  formulario = new FormGroup ({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required)

    // *required* verifica se o campo está vazio e *email* verifica o formato
    // é possível add mais verificações com uma função depois dos validators
    // importante que a função retorne um boolean (true -> hasError)
    // ex: [Validators.required, Validators.email, verificaFuncao])
  })

  // Função Autenticar
  autenticar():void {
    if(
      this.formulario.value.email === "teste@teste.com"
      && 
      this.formulario.value.senha === "123456"
      ) {
        // Adicionar email no LocalStorage
        localStorage.setItem('email', this.formulario.value.email)

        // Redirecionamento
        this.rota.navigateByUrl('/admin');
    } else {
      alert('Email ou senha incorretos')
    }
  }

}
