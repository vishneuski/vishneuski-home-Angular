import {Injectable} from "@angular/core";
import {Log} from "./models/log";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LogService {
  logs: Log[] = [];
  log: Log;
  logTracker = new BehaviorSubject<Log>("");
  LogState = this.logTracker.asObservable();

  addLog(log?: Log) {
    this.logs.push(log);
    this.logTracker.next(<any>{value: this.logs});
  }
}
