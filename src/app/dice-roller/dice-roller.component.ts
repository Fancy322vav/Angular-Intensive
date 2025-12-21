import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-dice-roller',
  standalone: true,
  templateUrl: './dice-roller.html',
  styleUrls: ['./dice.styles.css']
})
export class DiceRollerComponent {
  result = input.required<number>();
  roll = output<void>();
}
