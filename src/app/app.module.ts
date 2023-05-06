import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeuTranslocoDirective } from './neu-transloco.directive';

@NgModule({
  declarations: [
    AppComponent,
    NeuTranslocoDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    NeuTranslocoDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
