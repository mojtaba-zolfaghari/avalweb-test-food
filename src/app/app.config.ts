import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TitleStrategy, provideRouter, withComponentInputBinding } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import routes from './app.routes';
import { errorHandlerInterceptor } from './shared/interceptors/error-handler.interceptor';
import { TemplatePageTitleStrategy } from './shared/services/page-title.service';

export default {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    provideHttpClient(withInterceptors([errorHandlerInterceptor])),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  ]
} as ApplicationConfig;
