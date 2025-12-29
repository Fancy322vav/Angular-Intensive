import { Directive, ElementRef, HostListener, inject } from "@angular/core";

@Directive({
  selector: '[appRandomBg]',
  standalone: true
})
export class RandomDirective {
  constructor(private el: ElementRef) { }

  @HostListener('click') Onclick() {
    const randomColor = this.getRandomColor();
    this.el.nativeElement.style.backgroundColor = randomColor;
  }
  public getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
  }

}
