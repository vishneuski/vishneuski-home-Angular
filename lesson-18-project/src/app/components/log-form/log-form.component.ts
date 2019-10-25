import {Component, OnInit} from '@angular/core';

import {LogService} from '../../services/log.service';

import {Log} from '../../models/Log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent {
  constructor(private logService: LogService) {
  }

  onSubmit(form) {
    this.logService.newLog(form.value);
  }
}
