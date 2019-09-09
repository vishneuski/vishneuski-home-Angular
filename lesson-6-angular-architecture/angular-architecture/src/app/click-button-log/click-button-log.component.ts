import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-click-button-log',
  templateUrl: './click-button-log.component.html',
  styleUrls: ['./click-button-log.component.css']
})
export class ClickButtonLogComponent implements OnInit {
  visibility = true;
  clickCounter = 0;
  clickArray = [];

  hideParagraph() {
    const time = new Date().toLocaleTimeString();
    this.visibility = !this.visibility;
    this.clickCounter++;
    const obj: object = {clickCounter: this.clickCounter, time: time};
    this.clickArray.push(obj);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
