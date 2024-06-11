import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  handleError(error: HttpErrorResponse): void {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      switch (error.status) {
        case 400:
          errorMessage = `Bad Request: ${error.message}`;
          break;

        case 401:
          errorMessage = `Unauthorized: ${error.message}`;
          break;

        case 403:
          errorMessage = `Forbidden: ${error.message}`;
          break;

        case 404:
          errorMessage = `Not Found: ${error.message}`;
          break;

        case 500:
          errorMessage = `Internal Server Error: ${error.message}`;
          break;

        default:
          errorMessage = `Unexpected Error: ${error.message}`;
      }
    }
    console.error(errorMessage);
  }
}
