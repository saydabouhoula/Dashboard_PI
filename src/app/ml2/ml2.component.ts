import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-ml2',
  templateUrl: './ml2.component.html',
  styleUrls: ['./ml2.component.css']
})
export class Ml2Component {
  formData: any = {};
  predictionResult: any;
  errorOccurred: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  predict2() {
    const data = {
      "transporteurs": this.formData.Transporteurs,
      "clients": this.formData.Clients,
      "qt_bl": this.formData.Qt_BL_qx_x,
      "ecart_qx": this.formData.Ecart_Qx,
      "type_ecart": this.formData.Type_Ecart,
      "count_type_ecart": this.formData.Count_Type_Ecart,
      "nb_entree_transporteur": this.formData.NB_Entree_Transporteur,
      "qt_bl_nbp": this.formData.Qt_BL_NBP,
      "nombre_bl": this.formData.Nombre_BL,
      "remplisssage_par_quintaux": this.formData.remplisssage_par_quintaux,
    };

    this.http.post<any>('http://localhost:5000/predict', data)
      .pipe(
        catchError(this.handleError.bind(this))
      )
      .subscribe(
        response => {
          this.predictionResult = response.prediction;
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
