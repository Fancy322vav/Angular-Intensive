import { Component, SkipSelf } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'global-counter',
  imports: [AsyncPipe],
  templateUrl: './global-counter.component.html',
  styleUrl: './global-counter.component.css'
})

export class GlobalCounter {
  constructor(@SkipSelf() private counterService: CounterService) { }

  get currentCounter$(): Observable<number> {
    return this.counterService.counter$;
  }

  increment() {
    this.counterService.increment()
  }

  decrement() {
    this.counterService.decrement()
  }
}
