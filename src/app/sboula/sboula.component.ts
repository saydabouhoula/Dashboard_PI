import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-sboula',
  templateUrl: './sboula.component.html',
  styleUrls: ['./sboula.component.css']
})
export class SboulaComponent {
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
