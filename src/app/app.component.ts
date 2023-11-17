import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, Scroll } from '@angular/router';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-playground';
  router = inject(Router);
  constructor() {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((ev) => ev instanceof Scroll),
        tap((ev) => {
          console.log('Scroll event:', ev);
        })
      )
      .subscribe();
  }
}
