import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private emailPageMapping: { [email: string]: { page: string, password: string } } = {
    'ALCO@gmail.com': { page: '/Alco', password: '111111' },
    'Sboula@gmail.com': { page: '/Sboula', password: '111111' }
    // Ajoutez d'autres emails et leurs pages associées ici
  };

  constructor(private router: Router) { }

  login(email: string, password: string) {
    if (password.length < 6) {
      console.error('Le mot de passe doit contenir au moins 6 caractères');
      alert('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }

    const nextPageInfo = this.emailPageMapping[email];
    if (nextPageInfo && password === nextPageInfo.password) {
      this.router.navigateByUrl(nextPageInfo.page);
    } else {
      console.error('Email ou mot de passe non autorisés');
      alert('Email ou mot de passe non valide. Veuillez saisir des informations valides.');
    }
  }
}
