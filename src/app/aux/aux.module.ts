import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuxComponent } from './aux/aux.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AuxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AuxComponent
  ]
})
export class AuxModule { }
