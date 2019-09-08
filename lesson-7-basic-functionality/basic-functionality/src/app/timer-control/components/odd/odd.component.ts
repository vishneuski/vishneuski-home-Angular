import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() value;
  @Input() arr;

  constructor() { }

  ngOnInit() {
  }

  checkNum() {
    return this.arr.filter((item) => (item % 2 !== 0));
  }
// checkNum() {
//     if (this.value % 2 !== 0) {
//       return `Odd ${this.value}`;
//     }
//   }

}
