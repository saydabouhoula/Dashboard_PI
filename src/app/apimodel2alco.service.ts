import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Apimodel2alcoService {

  private apiUrl =  'http://localhost:5000/predict'; 
  constructor(private http: HttpClient) { }

  getData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
