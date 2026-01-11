import { Component, input } from '@angular/core';
import { RegistrationData } from '../../interfaces/registration.interface';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class User {
  userData = input<RegistrationData | null>();
}
