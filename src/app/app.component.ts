import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay,Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ng-playground';
  test = new Subject<any>();
  testOb!:Observable<any>;
  tester!:Observable<any>;
  constructor(){
    this.testOb = this.test.asObservable();
    this.tester = this.testOb.pipe(shareReplay(2))
    this.tester.subscribe(o=>console.log(o));
  }

  ngOnInit(): void {
    this.test.next(23)
    this.test.next(26)
    this.tester.subscribe(o=>console.log('try',o));
    //output 23
    //output 26
    //output try 23
    //output try 26
  }

}
