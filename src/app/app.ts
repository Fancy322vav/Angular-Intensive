import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { DataServise } from './services/data.service';
import { ITodo } from './services/data.interface';
import { RandomTodo } from './components/random-todo/random-todo.component';
import { finalize } from 'rxjs';
import { ExactTodo } from './components/exact-todo/exact-todo.component';

@Component({
  selector: 'app-root',
  imports: [RandomTodo, ExactTodo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  protected readonly todos = signal<ITodo[]>([]);
  protected readonly errorMessage = signal<string>('');
  protected readonly isLoading = signal<boolean>(false)

  constructor(private dataServise: DataServise) { }

  ngOnInit() {
    this.isLoading.set(true)
    this.dataServise.getTodoList().pipe(
      finalize(() => this.isLoading.set(false))
    )
      .subscribe({
        next: (response) => {
          this.todos.set(response)
        },
        error: (error) => {
          this.errorMessage.set(error.message)
          console.log('Error:', error)
        }
      })
  }
}
