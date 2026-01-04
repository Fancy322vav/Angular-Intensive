import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CounterService } from './services/counter.service';
import { AnalyticsService } from './services/analystics.service';
import { WeekenAnalyticsService } from './services/weekend-analystics.service';
import { ANALYTICS_SERVICE } from './tokens/analytics.token';
import { AnalyticsFactory } from './factories/analytics.factory';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    CounterService,
    AnalyticsService,
    WeekenAnalyticsService, {
      provide: ANALYTICS_SERVICE,
      useFactory: ((factory: AnalyticsFactory) => factory.createAnalyticsService()),
      deps: [AnalyticsFactory]
    }
  ]
};
