import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-alco',
  templateUrl: './alco.component.html',
  styleUrls: ['./alco.component.css']
})
export class AlcoComponent {
  showConfirmDialog = false;

  constructor(private authService: AuthService) {}

  logout() {
    this.showConfirmDialog = true;
  }

  onConfirmDialogResult(result: boolean) {
    this.showConfirmDialog = false;
    if (result) {
      this.authService.logout();
    }
  }
}
