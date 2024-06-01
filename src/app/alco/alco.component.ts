import { Component } from '@angular/core';

@Component({
  selector: 'app-alco',
  templateUrl: './alco.component.html',
  styleUrls: ['./alco.component.css']
})
export class AlcoComponent {
  logout() {
    const confirmation = confirm("Are you sure you want to logout?");
    
    if (confirmation) {
      
      window.location.href = "/"; 
    }
  }
}
