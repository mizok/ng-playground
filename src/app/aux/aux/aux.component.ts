import { Component } from '@angular/core';

@Component({
  selector: 'app-aux',
  templateUrl: './aux.component.html',
  styleUrls: ['./aux.component.scss']
})
export class AuxComponent {
  activateHandler(ev:any){
    console.log('router activate:',ev);
  }

}
