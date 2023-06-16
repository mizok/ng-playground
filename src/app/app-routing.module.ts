import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'A',
    loadChildren: () => import('./test-demo/test-demo.module').then(m => m.TestDemoModule),
    data:{
      str:'123'
    }
  },
  {
    path:'B',
    loadChildren: () => import('./test-demo/test-demo.module').then(m => m.TestDemoModule),
    data:{
      str:'234'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
