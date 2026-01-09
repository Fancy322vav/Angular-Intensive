import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TodoService, Todo } from '../../services/todo.service.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class TodosComponent implements OnInit {
  todos = signal<Todo[]>([]);
  isLodaing = signal(false);

  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isLodaing.set(true);
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        console.log('Todos loaded:', todos);
        this.todos.set(todos);
      },
      error: (error) => {
        console.error('Error loading todos:', error);
      },
      complete: () => {
        this.isLodaing.set(false);
      }
    });
  }

  onTodoClick(id: number): void {
    this.router.navigate(['/todos', id]);
  }
}
