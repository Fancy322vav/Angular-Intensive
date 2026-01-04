import { Component, Self } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'local-counter',
  imports: [],
  providers: [CounterService],
  templateUrl: './local-counter.component.html',
})

export class LocalCounter {
  constructor(@Self() private counterService: CounterService) { }

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
