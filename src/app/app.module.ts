import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestAComponent } from './test-a/test-a.component';
import { TestBComponent } from './test-b/test-b.component';

import { TestComponent } from './test/test.component'
@NgModule({
  declarations: [
    AppComponent,
    TestAComponent,
    TestBComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestComponent
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
