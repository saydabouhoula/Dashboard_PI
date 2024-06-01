import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importez le service Router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';

  constructor(private router: Router) {} // Injectez le service Router

  // Méthode pour obtenir l'URL actuelle
  getCurrentUrl(): string {
    return this.router.url;
  }
}
