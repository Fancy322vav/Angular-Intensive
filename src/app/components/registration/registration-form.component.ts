import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { minAgeValidator, hasCapitalLetterValidator, hasSpecialSymbolValidator, passwordMatchValidator } from '../../validators/registration/registration.validators';
import { RegistrationData } from '../../interfaces/registration.interface';
import { CustomHobbiesInput } from '../custom-hobbies-input/custom-hobbies-input.component';

@Component({
  selector: 'registration-form',
  imports: [ReactiveFormsModule, CustomHobbiesInput],
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
    hobbies: new FormControl<string[]>([])
  }, { validators: passwordMatchValidator });

  formSubmitted = output<RegistrationData>();

  onSubmit() {
    if (this.registrationForm.valid) {
      this.formSubmitted.emit(this.registrationForm.value as RegistrationData);
    }
  }
}
