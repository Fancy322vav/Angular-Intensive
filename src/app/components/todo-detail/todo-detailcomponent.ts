import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TodoService, Todo } from '../../services/todo.service.component';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent implements OnInit {
  todo = signal<Todo | null>(null);
  isLodaing = signal(false);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.isLodaing.set(true);
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.todoService.getTodoById(+id).subscribe({
        next: (todo) => {
          this.todo.set(todo);
        },
        error: (error) => {
          console.error('Error loading todos:', error);
        },
        complete: () => {
          this.isLodaing.set(false);
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['/todos']);
  }
}
