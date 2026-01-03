import { AfterViewInit, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { fromEvent, switchMap, tap } from 'rxjs';
import { ITodo } from '../services/data.interface';
import { DataServise } from '../services/data.service';

@Component({
  selector: 'random-todo',
  imports: [],
  templateUrl: './random-todo.html',
  styleUrl: './random-todo.css'
})

export class RandomTodo implements AfterViewInit {
  protected readonly randomTodo = signal<ITodo | null>(null);
  protected readonly errorMessage = signal<string>('');
  protected readonly isLoading = signal<boolean>(false)
  @ViewChild('randomId') randomTodoBtnRef!: ElementRef<HTMLButtonElement>;

  constructor(private dataServise: DataServise) { }


  ngAfterViewInit() {
    const randomTodoBtn = this.randomTodoBtnRef.nativeElement;

    fromEvent(randomTodoBtn, 'click').pipe(
      tap(() => this.isLoading.set(true)),
      switchMap(() => this.dataServise.getRandomTodo()),
      tap(() => this.isLoading.set(false))
    )
      .subscribe({
        next: (randomTodo) => {
          this.randomTodo.set(randomTodo)
        },
        error: (error) => {
          this.errorMessage.set(error.message)
          console.log('Error:', error)
        }
      })
  }
}
