import { Component, signal } from '@angular/core';
import { RegistrationForm } from "./components/registration/registration-form.component";
import { User } from "./components/user/user.component";
import { RegistrationData } from "./interfaces/registration.interface";

@Component({
  selector: 'app-root',
  imports: [RegistrationForm, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  registrationData = signal<RegistrationData | null>(null);

  onFormSubmit(data: RegistrationData) {
    this.registrationData.set(data);
  }
}
