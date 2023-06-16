import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestDemoComponent } from './test-demo/test-demo.component'
import { GgComponent } from './gg/gg.component'
import { WwComponent } from './ww/ww.component'

const routes: Routes = [
  {
    path:'',
    component:TestDemoComponent,
    children:[
      {
        path:'GG',
        component:GgComponent
      },
      {
        path:'WW',
        component:WwComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestDemoRoutingModule { }
