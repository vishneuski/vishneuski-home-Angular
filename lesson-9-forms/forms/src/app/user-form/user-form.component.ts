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

  constructor(private userService: UserFormService) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  nameSuggest() {
    this.userService.setUserName();
  }

  submitData(user: User, isValid: boolean) {
    if (isValid)
      console.log(user);
      console.log(isValid);
    this.sendData.emit(user);
  }
}
