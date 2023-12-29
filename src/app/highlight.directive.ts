import { Directive,ElementRef,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef,private render: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.render.setStyle(this.el.nativeElement,'backgroundColor','yellow');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.render.setStyle(this.el.nativeElement,'backgroundColor','white');
  }

}
