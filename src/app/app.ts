import { Component } from '@angular/core';
import { RandomDirective } from './direcrives/random-bg.directive';
import { HideContent } from './direcrives/hide-content.directive';
import { ClickCounterDirective } from './direcrives/click-counter.directive';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RandomDirective, HideContent, ClickCounterDirective],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  clickCounter = 0;

  onClickCount(counter: number) {
    this.clickCounter = counter
  }
}
