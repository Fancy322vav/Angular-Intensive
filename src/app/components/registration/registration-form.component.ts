import { Component, signal } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { minAgeValidator, hasCapitalLetterValidator, hasSpecialSymbolValidator, passwordMatchValidator } from '../../validators/registration/registration.validators';

@Component({
  selector: 'registration-form',
  imports: [ReactiveFormsModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})

export class RegistrationForm {
  registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    birthdate: new FormControl('', [Validators.required, minAgeValidator(14)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), hasCapitalLetterValidator, hasSpecialSymbolValidator]),
    confirmPassword: new FormControl('', [Validators.required]),
    hobbies: new FormArray([new FormControl('')])
  }, { validators: passwordMatchValidator });

  hobbies = signal<FormArray>(this.registrationForm.get('hobbies') as FormArray);

  addHobby() {
    this.hobbies().push(new FormControl(''));
  }

  removeHobby(index: number) {
    if (this.hobbies().length > 1) {
      this.hobbies().removeAt(index);
    }
  }
}
