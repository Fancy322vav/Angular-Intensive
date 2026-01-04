import { Directive, ElementRef, HostListener, inject, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appRandomBg]',
  standalone: true
})
export class RandomDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') Onclick() {
    const randomColor = this.getRandomColor();
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', randomColor);
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
