import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ng-playground';
  private subject$ = new ReplaySubject(1);
  constructor(){
  }

  ngOnInit(): void {
      this.subject$.next(1);
      this.subject$.subscribe((o)=>{console.log(o)});
  }


}
