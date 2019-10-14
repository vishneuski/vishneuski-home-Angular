import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LogService} from '../log.service';
import {Log} from '../models/log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  logForm: FormGroup;

  constructor(private logService: LogService) {}

  ngOnInit() {
    this.logForm = new FormGroup({
        logName: new FormControl(null, Validators.required)
      }
    );
  }

  onSubmit(log: Log) {
    this.logService.addLog(log);
    console.log(log);
  }
}
