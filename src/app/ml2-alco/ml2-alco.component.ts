import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-ml2-alco',
  templateUrl: './ml2-alco.component.html',
  styleUrls: ['./ml2-alco.component.css']
})
export class Ml2AlcoComponent {
  formData: any = {};
  predictionResult: any;
  errorOccurred: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient) { }

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

    this.http.post<any>('http://localhost:5000/predict', data)
      .pipe(
        catchError(this.handleError.bind(this))
      )
      .subscribe(
        response => {
          this.predictionResult = response;
        }
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error && error.error.error && error.error.message) {
      this.errorOccurred = true;
      this.errorMessage = `${error.error.error}: ${error.error.message}`;
    } else {
      this.errorOccurred = true;
      this.errorMessage = 'Something bad happened; please try again later.';
    }
    return throwError(this.errorMessage);
  }
}
