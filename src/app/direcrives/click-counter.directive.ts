import { Directive, EventEmitter, HostListener, Output } from "@angular/core";
@Directive({
  selector: '[appClickCounter]',
  standalone: true
})
export class ClickCounterDirective {
  @Output() clickCount = new EventEmitter<number>()
  private counter = 0;

  @HostListener('click') Onclick() {
    this.counter++
    this.clickCount.emit(this.counter)
  }
}
