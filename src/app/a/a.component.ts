import { Component, OnInit } from '@angular/core';
import { CComponent } from '../c/c.component'
import { provideParent } from '../g';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
  providers:[provideParent(AComponent)]
})
export class AComponent extends CComponent implements OnInit {

  constructor(
  ){
    super();
  }

  override ngOnInit(): void {
    return;
  }

}
