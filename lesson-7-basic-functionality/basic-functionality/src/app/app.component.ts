import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numArr = [];
  val = 0;
  timer: any;

  start() {
    this.timer = setInterval(() => {
      this.numArr.push(this.val);
      return this.val++; }, 1000);
  }
  stop() {
    clearInterval(this.timer);
  }
}
