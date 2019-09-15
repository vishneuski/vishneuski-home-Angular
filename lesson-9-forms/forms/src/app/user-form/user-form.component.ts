import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../model/user";
import {UserFormService} from "../services/user-form.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  user: User;

  @Output()
  sendData: EventEmitter<User> = new EventEmitter<User>();

  submitData(user: User, isValid: boolean) {
    if (isValid)
      this.sendData.emit(user);
      this.form.reset();
  }

  constructor(private userService: UserFormService) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
  }
}
