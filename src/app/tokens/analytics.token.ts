import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export interface IAnalyticsService {
  message$: Observable<string>;
  trackAnalytics(): void;
}
export const ANALYTICS_SERVICE = new InjectionToken<IAnalyticsService>(
  'Analytics Service Token'
)
