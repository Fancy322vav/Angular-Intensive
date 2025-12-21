import { Component, computed, OnInit, signal } from '@angular/core';
import { getDiceRoll } from './util';
import { FormatRollPipe } from './format-roll.pipe';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';

@Component({
  selector: 'app-root',
  imports: [FormatRollPipe, DiceRollerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  protected readonly dice = signal([1, 1]);
  protected readonly history = signal<Array<number[]>>([])
  protected readonly summary = computed(() => this.dice().reduce((acc, val) => acc + val))

  protected handleDiceRoll(): void {
    this.history.update((currentHistory) => [...currentHistory, this.dice()])
    const newDice = [getDiceRoll(), getDiceRoll()]
    this.dice.set(newDice)
  }

  ngOnInit(): void {
    const newDice = [getDiceRoll(), getDiceRoll()]
    this.dice.set(newDice)
  }
}
