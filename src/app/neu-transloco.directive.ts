import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[neuTransloco]'
})
export class NeuTranslocoDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {

  }

  ngOnInit(): void {
    this.viewContainerRef.clear();
    const e = this.viewContainerRef.createEmbeddedView(this.templateRef,{
      $implicit: (input:string) => {
        return input + ' hello';
      }
    });
    e.rootNodes[0].ngProjectAs = 'div';
  }

}
