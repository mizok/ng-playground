import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show!:boolean;
  reveal!:boolean;
  title = 'ng-playground';
  constructor(){
  }

  onClick(){
  }
}
