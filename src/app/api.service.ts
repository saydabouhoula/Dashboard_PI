import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/predict';  // Corrected apiUrl

  constructor(private http: HttpClient) { }

  getData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data).pipe(  // Updated apiUrl usage
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('An error occurred:', error.error.message);
    } else {
      // Server-side error
      console.error(
        `Error code ${error.status}, ` +
        `Response: ${error.error}`);
    }
    // Return an observable with a user-facing error message
    return throwError('An error occurred. Please try again later.');
  }
}
