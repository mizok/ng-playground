import { AfterViewInit, Directive,ElementRef,OnChanges,OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[neuTransloco]'
})
export class NeuTranslocoDirective implements OnInit,AfterViewInit,OnChanges {
  private keys:string[] = [];
  // private keysProxy  = new Proxy(this.keys, {
  //   get(target, property, receiver) {
  //     return Reflect.get(target, property, receiver);
  //   },
  //   set(target, property, value, receiver) {
  //     const result = Reflect.set(target, property, value, receiver);
  //     // 执行数组变化后的操作
  //     console.log(`Array modified: ${property} = ${value}`);
  //     return result;
  //   },
  //   deleteProperty(target, property) {
  //     const result = Reflect.deleteProperty(target, property);
  //     // 执行数组删除元素后的操作
  //     console.log(`Array element deleted: ${property}`);
  //     return result;
  //   }
  // });

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    const parentNode = this.renderer.parentNode(this.elementRef.nativeElement);
    console.log(parentNode); // 输出包含指令的组件
  }

  ngOnInit(): void {
    this.viewContainerRef.clear();
    const e = this.viewContainerRef.createEmbeddedView(this.templateRef,{
      $implicit: (input:string) => {
        this.keys.push(input);
        return input + ' hello';
      }
    });
    console.log(this.keys,this.keys.length,123)
  }

  ngAfterViewInit(): void {
      console.log(this.keys,this.keys.length)
  }

  ngOnChanges(){
    console.log(this.keys,this.keys.length)
  }

}
