import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackgroundButton]'
})
export class BackgroundButtonDirective {
  private bgButtonDefault: string = '-webkit-linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  @Input() bgButtonOnMouseEnter: string = '-webkit-linear-gradient(90deg, rgb(56 4 15) 0%, rgb(242 13 45) 100%)';
  constructor(private el: ElementRef, private rend: Renderer2) { }

  @HostListener('mouseenter') onEnter(): void {
    this.setBgColor(this.bgButtonOnMouseEnter);
  }
  @HostListener('mouseleave') onLeave(): void {
    this.setBgColor(this.bgButtonDefault);
  }

  setBgColor(value: string): void {
    this.el.nativeElement.style.background = value;
  }
}
