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
      "nom": this.formData.nom,
      "proteine": this.formData.proteine,
      "amidon": this.formData.amidon,
      "calcium": this.formData.calcium
    };

    this.apiService.getData(data).subscribe(result => {
      // Assign individual properties of prediction result
      this.predictionResult = result.prediction;
      // You can access individual properties like this.predictionResult.Cluster_Amidon, etc.
    });
  }
}
