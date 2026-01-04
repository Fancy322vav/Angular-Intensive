import { Component, SkipSelf } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'global-counter',
  imports: [],
  providers: [CounterService],
  templateUrl: './global-counter.component.html',
  styleUrl: './global-counter.component.css'
})

export class GlobalCounter {
  constructor(@SkipSelf() private counterService: CounterService) { }

  get currentCounter(): number {
    return this.counterService.currentValue;
  }

  increment() {
    this.counterService.increment()
  }

  decrement() {
    this.counterService.decrement()
  }
}
