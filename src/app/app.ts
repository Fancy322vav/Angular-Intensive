import { Component } from '@angular/core';
import { GlobalCounter } from "./components/global-counter/global-counter.component";
import { LocalCounter } from "./components/local-counter/local-counter.component";

@Component({
  selector: 'app-root',
  imports: [GlobalCounter, LocalCounter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
}
