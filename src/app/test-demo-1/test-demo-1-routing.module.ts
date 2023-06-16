import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestDemo1Component } from './test-demo-1/test-demo-1.component'

const routes: Routes = [
  {
    path:'',
    component:TestDemo1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestDemo1RoutingModule { }
