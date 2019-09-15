import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {UserFormService} from "../services/user-form.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  user: User;
  secrets: string[];

  constructor(private userService: UserFormService) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.secrets = this.userService.secrets;
  }
}
