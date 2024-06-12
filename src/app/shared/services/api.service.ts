import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Product } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiEndpoint;

  constructor(
    private http: HttpClient,
  ) { }

  getProduct() {
    return this.http.get<{ data: Product[]; }>('./assets/api/products.json', { responseType: 'json' }).pipe(
      map(response => response.data),
      catchError(() => of(false))
    );
  }

}
