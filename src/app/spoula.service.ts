import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpoulaService {
  private apiUrl =  'http://localhost:5000/predict'; 
  constructor(private http: HttpClient) { }

  getData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data)
    
  }
}
