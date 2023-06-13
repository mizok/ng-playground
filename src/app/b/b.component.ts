import { Component, OnInit, Optional, SkipSelf, ElementRef } from '@angular/core';
import { CComponent } from '../c/c.component';
import { provideParent } from '../g'
import { BehaviorSubject, fromEvent, switchMap, tap, timer } from 'rxjs';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
  providers: [provideParent(BComponent)]
})
export class BComponent extends CComponent implements OnInit {

  f$ = fromEvent(this.ele.nativeElement,'touchstart');

  constructor(
    @Optional() protected parent :CComponent,
    private ele:ElementRef
  ){
    super();

  }

  override ngOnInit(): void {
    this.f$.pipe(
      switchMap(()=>
        timer(2000).pipe(
          tap(
            ()=>{
              console.log('test')
            }
          )
        )
      )
    ).subscribe();
  }

}
