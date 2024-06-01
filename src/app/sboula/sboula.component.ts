import { Component } from '@angular/core';

@Component({
  selector: 'app-sboula',
  templateUrl: './sboula.component.html',
  styleUrls: ['./sboula.component.css']
})
export class SboulaComponent {
  logout() {
    const confirmation = confirm("Are you sure you want to logout?");
    
    if (confirmation) {
      
      window.location.href = "/"; 
    }
  }
}
