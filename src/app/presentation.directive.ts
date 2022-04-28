import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPresentation]'
})
export class PresentationDirective {

  constructor(ele: ElementRef) 
  {
    ele.nativeElement.style.color="red";
  }

}
