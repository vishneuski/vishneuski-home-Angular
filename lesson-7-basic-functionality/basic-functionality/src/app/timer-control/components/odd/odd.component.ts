import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() arr;

  constructor() { }

  ngOnInit() {
  }

  checkNum() {
    return this.arr.filter((item) => (item % 2 !== 0));
  }
}
