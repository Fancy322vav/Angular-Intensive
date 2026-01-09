import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) { }

  navigateToTodos(): void {
    this.router.navigate(['/todos']);
  }

  navigateToWeekend(): void {
    this.router.navigate(['/weekend-party'], { queryParams: { bypass: true } });
  }
}
