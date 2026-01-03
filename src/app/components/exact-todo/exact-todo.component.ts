import { Component, OnInit, signal } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { ITodo } from '../../services/data.interface';
import { DataServise } from '../../services/data.service';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'exact-todo',
  imports: [],
  templateUrl: './exact-todo.component.html',
  styleUrl: './exact-todo.component.css'
})

export class ExactTodo implements OnInit {
  constructor(private dataServise: DataServise, private counterService: CounterService) { }

  protected readonly todo = signal<ITodo | null>(null);
  protected readonly errorMessage = signal<string>('');
  protected readonly isLoading = signal<boolean>(false);

  get currentCounter(): number {
    return this.counterService.currentValue;
  }

  get isDecrementDisabled(): boolean {
    return this.counterService.currentValue <= 1;
  }

  increment() {
    this.counterService.increment()
  }

  decrement() {
    this.counterService.decrement()
  }

  ngOnInit() {
    this.counterService.counter$.pipe(
      tap(() => this.isLoading.set(true)),
      switchMap(counter => this.dataServise.getExactTodo(counter)),
      tap(() => this.isLoading.set(false))
    ).subscribe({
      next: (todo) => this.todo.set(todo),
      error: (error) => {
        this.errorMessage.set(error.message)
        console.log('Error:', error)
      }
    });
  }
}
