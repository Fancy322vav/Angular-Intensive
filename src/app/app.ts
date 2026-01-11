import { Component, signal } from '@angular/core';
import { RegistrationForm } from "./components/registration/registration-form.component";

@Component({
  selector: 'app-root',
  imports: [RegistrationForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal("Clear branch");
}
