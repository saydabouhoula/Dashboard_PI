import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.css']
})
export class MlComponent {
  formData: any = {};
  predictionResult: any;

  constructor(private apiService: ApiService) { }

  // Method to perform prediction
  predict() {
    const data = {
      "Product": this.formData.nom, // Utilisez "Product" au lieu de "nom"
      "Proteine": this.formData.proteine,
      "Amidon": this.formData.amidon,
      "Calcium": this.formData.calcium
    };

    this.apiService.predictKMeans(data).subscribe((result: any) => {
      this.predictionResult = result.prediction; // Accédez à la propriété 'prediction' au lieu de la racine
    }, (error: any) => {
      console.error('Error!', error);
    });
  }
}
