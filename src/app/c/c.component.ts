import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss'],
})
export abstract class CComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
