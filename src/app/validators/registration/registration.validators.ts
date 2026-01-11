import { AbstractControl, ValidationErrors } from "@angular/forms";

export const minAgeValidator = (minAge: number) => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const birthdate = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();

    const actualAge = monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? age - 1 : age;

    if (actualAge < minAge) {
      return { minAge: { requiredAge: minAge, actualAge: actualAge } };
    }

    return null;
  };
}

export const hasCapitalLetterValidator = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) {
    return null;
  }

  const hasCapital = /[A-Z]/.test(control.value);

  if (!hasCapital) {
    return { capitalLetter: true };
  }

  return null;
}

export const hasSpecialSymbolValidator = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) {
    return null;
  }

  const hasSpecialSymbol = /[!#$%&]/.test(control.value);

  if (!hasSpecialSymbol) {
    return { specialSymbol: true };
  }

  return null;
}

export const passwordMatchValidator = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (!password || !confirmPassword) {
    return null;
  }

  if (!confirmPassword.value) {
    return null;
  }

  if (password.value !== confirmPassword.value) {
    return { passwordMismatch: true };
  }

  return null;
}
