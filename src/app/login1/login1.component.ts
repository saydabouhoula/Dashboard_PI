import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'C:/Users/ICHRAK/Downloads/Dashboard/Dashboard/src/app/auth.service'; // Importez le service AuthService
import { AuthService } from 'C:/Users/user/Downloads/Dashboard/Dashboard/src/app/auth.service'; // Importez le service AuthService depuis le même répertoire

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  email: string = '';
  password: string = '';
  
  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Définir showAppComponentContent à false lorsque ce composant est initialisé
   
  }

  submitForm() {
    this.authService.login(this.email, this.password);
  }
}
