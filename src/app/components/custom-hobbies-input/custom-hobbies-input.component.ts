import { Component, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-hobbies-input',
  templateUrl: './custom-hobbies-input.component.html',
  styleUrl: './custom-hobbies-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomHobbiesInput),
      multi: true
    }
  ]
})
export class CustomHobbiesInput implements ControlValueAccessor {
  hobbies = signal<string[]>(['']);
  disabled = false;

  private onChange: (value: string[]) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string[]) {
    if (value && value.length > 0) {
      this.hobbies.set([...value]);
    } else {
      this.hobbies.set(['']);
    }
  }

  registerOnChange(fn: (value: string[]) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  addHobby() {
    const currentHobbies = this.hobbies();
    this.hobbies.set([...currentHobbies, '']);
    this.notifyChange();
  }

  removeHobby(index: number) {
    const currentHobbies = this.hobbies();
    if (currentHobbies.length > 1) {
      const newHobbies = currentHobbies.filter((_, i) => i !== index);
      this.hobbies.set(newHobbies);
      this.notifyChange();
    }
  }

  updateHobby(index: number, value: string) {
    const currentHobbies = [...this.hobbies()];
    currentHobbies[index] = value;
    this.hobbies.set(currentHobbies);
    this.notifyChange();
  }

  private notifyChange() {
    this.onChange(this.hobbies());
  }

  markAsTouched() {
    this.onTouched();
  }
}
