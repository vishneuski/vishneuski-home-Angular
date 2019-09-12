import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../models/User";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {

  @Input()
  detail: User;

  @Output()
  change: EventEmitter<any> = new EventEmitter();

  onChange() {
    this.change.emit(this.detail);
  }
}
