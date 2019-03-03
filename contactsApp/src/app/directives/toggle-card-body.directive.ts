import { Directive, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appToggleCardBody]'
})
export class ToggleCardBodyDirective {

  constructor(private renderer2: Renderer2, private el: ElementRef) {
  }

  @Input('appToggleCardBody') toggleCardBody: boolean;

  @HostListener('click') toggle(): void {
    let cardBody = this.renderer2.nextSibling(this.el.nativeElement);
    if (!this.toggleCardBody) {
      this.renderer2.setStyle(cardBody, 'display', 'block');
      this.toggleCardBody = true;
    }else{
      this.renderer2.setStyle(cardBody, 'display', 'none');
      this.toggleCardBody = false;
    }
  }

}
