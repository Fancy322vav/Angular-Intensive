import { Component, Self } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'local-counter',
  imports: [AsyncPipe],

  templateUrl: './local-counter.component.html',
  styleUrl: './local-counter.component.css'
})

export class LocalCounter {
  constructor(@Self() private counterService: CounterService) { }

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
