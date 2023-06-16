import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestDemo1RoutingModule } from './test-demo-1-routing.module';
import { TestDemo1Component } from './test-demo-1/test-demo-1.component';


@NgModule({
  declarations: [
    TestDemo1Component
  ],
  imports: [
    CommonModule,
    TestDemo1RoutingModule
  ]
})
export class TestDemo1Module { }
