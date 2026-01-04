import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CounterService {
  private counterSubject = new BehaviorSubject<number>(0);

  counter$: Observable<number> = this.counterSubject.asObservable();

  get currentValue(): number {
    return this.counterSubject.value;
  }

  increment() {
    this.counterSubject.next(this.currentValue + 1);
  }

  decrement() {
    this.counterSubject.next(this.currentValue - 1);
  }
}
