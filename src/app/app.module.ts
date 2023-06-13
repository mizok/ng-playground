import { ComponentRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeuTranslocoDirective } from './neu-transloco.directive';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@NgModule({
  declarations: [
    AppComponent,
    NeuTranslocoDirective,
    AComponent,
    BComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    NeuTranslocoDirective,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
