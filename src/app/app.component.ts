import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-playground';
  protected signal = signal(0);
  constructor(){
    effect(()=>{console.log('signal',this.signal())})
    this.signal.set(30);
    this.signal.update((val)=>val+20)

  }

}
