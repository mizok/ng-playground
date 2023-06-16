import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestDemoRoutingModule } from './test-demo-routing.module';
import { TestDemoComponent } from './test-demo/test-demo.component';
import { GgComponent } from './gg/gg.component';
import { WwComponent } from './ww/ww.component';


@NgModule({
  declarations: [
    TestDemoComponent,
    GgComponent,
    WwComponent
  ],
  imports: [
    CommonModule,
    TestDemoRoutingModule
  ]
})
export class TestDemoModule { }
