import {Component, OnInit} from "@angular/core";
import {LogService} from "../log.service";
import {Subscription} from "rxjs";
import {Log} from "../models/log";

@Component({
  selector: "app-log-list",
  templateUrl: "./log-list.component.html",
  styleUrls: ["./log-list.component.css"]
})
export class LogListComponent implements OnInit {
  logs: Log[];
  private subscription: Subscription;

  constructor(private logService: LogService) {
  }

  ngOnInit() {
    this.subscription = this.logService.LogState.subscribe((val: any) => {
      this.logs = val.value;
      console.log(this.logs);
    });
  }

  changeLog(log) {
    console.log(log);
  }
}
