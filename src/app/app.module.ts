import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
  ],
  providers: [
    {
      provide:RouteReuseStrategy,
      useClass:CustomRouteReuseStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
