import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-test-demo',
  templateUrl: './test-demo.component.html',
  styleUrls: ['./test-demo.component.scss']
})
export class TestDemoComponent implements OnInit {

  constructor(
    private route:ActivatedRoute
  ) {
    const data = this.route.data.subscribe(x=>console.log(x));
  }

  ngOnInit(): void {
  }

}
