import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodosComponent } from './components/todos/todos';
import { TodoDetailComponent } from './components/todo-detail/todo-detailcomponent';
import { weekendGuard } from './guards/weekend.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'todos/:id', component: TodoDetailComponent },
  {
    path: 'weekend-party',
    loadComponent: () => import('./guards/weekend-party/weekend-party').then(m => m.WeekendPartyComponent),
    canActivate: [weekendGuard]
  }
];
