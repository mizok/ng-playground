import { Component, OnInit } from '@angular/core';
import { Subject, tap, zip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private subject1$ = new Subject<void>();
  private subject2$ = new Subject<void>();
  private subject3$ = new Subject<void>();

  constructor(){
  }

  ngOnInit(): void {
    zip(this.subject1$,this.subject2$,this.subject3$).pipe(
    ).subscribe();


    setTimeout(()=>{
      this.subject1$.next();
    },1000);
    setTimeout(()=>{
      this.subject2$.next();
    },2000);
    setTimeout(()=>{
      this.subject3$.next();
    },3000);

  }


}
