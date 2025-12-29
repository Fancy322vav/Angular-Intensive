import { Directive, ElementRef, HostListener } from "@angular/core";
@Directive({
  selector: '[appHideContent]',
  standalone: true
})
export class HideContent {
  constructor(private el: ElementRef) { }

  @HostListener('dblclick') OnDblClick() {
    this.el.nativeElement.style.display = 'none';
  }
}
