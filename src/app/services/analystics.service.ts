import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class AnalyticsService {
  private messageSubject = new BehaviorSubject<string>('');
  message$: Observable<string> = this.messageSubject.asObservable()

  trackAnalytics() {
    this.messageSubject.next('Analytics is tracked')
  }

}
