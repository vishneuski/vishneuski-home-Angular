import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../models/User";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {

  @Input()
  detail: User;

  @Output()
  change: EventEmitter<any> = new EventEmitter();

  onChange() {
    this.change.emit(this.detail);
  }
}
