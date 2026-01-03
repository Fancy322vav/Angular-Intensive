import { Component, OnInit, signal } from '@angular/core';
import { DataServise } from './services/data.service';
import { ITodo } from './services/data.interface';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  protected readonly todos = signal<ITodo[]>([]);
  protected readonly errorMessage = signal<string>('')

  constructor(private dataServise: DataServise) { }
  ngOnInit() {
    this.dataServise.getTodoList().subscribe({
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
