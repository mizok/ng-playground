import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-playground';
  private router = inject(Router);
  constructor(){
  }

  activateHandler(ev:any){
    console.log('router activate:',ev);
  }

  navigateTo(){
    this.router.navigateByUrl('(aux:test)');
  }

}
