import { Injectable } from "@angular/core";
import { AnalyticsService } from "../services/analystics.service";
import { WeekenAnalyticsService } from "../services/weekend-analystics.service";
import { IAnalyticsService } from "../tokens/analytics.token";

@Injectable({ providedIn: 'root' })
export class AnalyticsFactory {
  constructor(
    private analyticsService: AnalyticsService,
    private weekendAnalysticsService: WeekenAnalyticsService
  ) { }

  createAnalyticsService(): IAnalyticsService {
    const today = new Date().getDay();
    const isWeekend = today === 0 || today === 6

    return isWeekend ? this.weekendAnalysticsService : this.analyticsService
  }
}
