import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ml2-alco',
  templateUrl: './ml2-alco.component.html',
  styleUrls: ['./ml2-alco.component.css']
})
export class Ml2AlcoComponent {
  formData: any = {};
  complianceResult: any;
  errorOccurred: boolean = false;
  errorMessage: string = '';

  constructor(private apiService: ApiService) { }

  // Method to perform prediction
  predict3() {
    const data = {
      "Product": this.formData.Product,
      "Humidite": this.formData.Humidite,
      "Aw": this.formData.Aw,
      "Proteine": this.formData.Proteine,
      "Amidon": this.formData.Amidon,
      "Fibre": this.formData.Fibre,
      "Calcium": this.formData.Calcium,
    };

    this.apiService.predictLogistic(data).subscribe((result: any) => {
      this.complianceResult = result.compliance;
    }, (error: any) => {
      console.error('Error!', error);
      this.errorOccurred = true;
      this.errorMessage = 'An error occurred while fetching the prediction result.';
    });
  }
}
