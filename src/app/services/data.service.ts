import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ITodo } from "./data.interface";

@Injectable({
  providedIn: 'root'
})
export class DataServise {
  constructor(private http: HttpClient) { }

  getTodoList(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      map(todos => todos.filter(todo => todo.id % 2 === 0))
    )
  }

  getRandomTodo(): Observable<ITodo> {
    const randomId = Math.floor(Math.random() * 200) + 1;
    return this.http.get<ITodo>(`https://jsonplaceholder.typicode.com/todos/${randomId}`)
  }
}
