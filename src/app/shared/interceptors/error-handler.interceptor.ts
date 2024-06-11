import { HttpContextToken, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ErrorHandlingService } from '../services/error-handling.service';

export const GOING_THROUGH_ERROR_INTERCEPTOR_OPTION = new HttpContextToken<{ notAllowed: boolean, expiresIn?: number; }>(() => ({ notAllowed: true }));

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const errorHandlingService = inject(ErrorHandlingService);

  if (req.context.get(GOING_THROUGH_ERROR_INTERCEPTOR_OPTION).notAllowed) {
    return next(req);
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      errorHandlingService.handleError(error);
      return throwError(() => error);
    })
  );
};
