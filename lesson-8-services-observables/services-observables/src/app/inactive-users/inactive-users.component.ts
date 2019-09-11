import {Component, OnInit} from '@angular/core';
import {UsersService} from "../services/users.service";
import {CounterService} from "../services/counter.service";
import {User} from "../models/User";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: [UsersService, CounterService]
})
export class InactiveUsersComponent implements OnInit {

  users: User[];
  inactiveUsers: User[];

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.users = this.userService.getData();
  }

  showInactiveUsers() {
    this.inactiveUsers = this.userService.showInactiveUsers();
    console.log(this.inactiveUsers);
  }
}
