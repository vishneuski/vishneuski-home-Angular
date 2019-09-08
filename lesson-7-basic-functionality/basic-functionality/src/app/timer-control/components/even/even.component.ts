import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() arr;

  constructor() { }

  ngOnInit() {
  }
  checkNum() {
    return this.arr.filter((item) => (item % 2 === 0 && item !== 0));
  }
}
