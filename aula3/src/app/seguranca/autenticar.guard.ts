import { CanActivateFn, Router } from '@angular/router';

// Alteramos return para false para "proteger" a página de *admin*
export const autenticarGuard: CanActivateFn = (route, state) => {
  
  // Importar a classe Router
  const rota = new Router;

  // Validação
  if(localStorage.getItem('email') == undefined) {
    rota.navigateByUrl('');
  }
  
  return true;
};
