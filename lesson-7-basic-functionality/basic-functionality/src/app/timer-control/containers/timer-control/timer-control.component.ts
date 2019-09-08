import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.css']
})
export class TimerControlComponent implements OnInit {
  startTitle = 'start';
  stopTitle = 'stop';

  @Output()
  start: EventEmitter<any> = new EventEmitter();

  @Output()
  stop: EventEmitter<any> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  startTimer() {
    this.start.emit();
  }

  stopTimer() {
    this.stop.emit();
  }
}
