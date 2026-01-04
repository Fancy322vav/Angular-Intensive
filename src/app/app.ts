import { Component, inject, Pipe } from '@angular/core';
import { GlobalCounter } from "./components/global-counter/global-counter.component";
import { LocalCounter } from "./components/local-counter/local-counter.component";
import { ANALYTICS_SERVICE, IAnalyticsService } from './tokens/analytics.token';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [GlobalCounter, LocalCounter, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  private analysticsService: IAnalyticsService = inject(ANALYTICS_SERVICE)

  message$ = this.analysticsService.message$;

  track() {
    this.analysticsService.trackAnalytics();
  }
}
