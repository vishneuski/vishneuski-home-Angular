import {Component, OnInit} from '@angular/core';
import {UsersService} from "../services/users.service";
import {CounterService} from "../services/counter.service";
import {User} from "../models/User";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: [UsersService, CounterService]
})
export class ActiveUsersComponent implements OnInit {

  users: User[];
  activeUsers: User[];

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.users = this.userService.getData();
  }

  showActiveUsers() {
    this.activeUsers = this.userService.showActiveUsers();
    console.log(this.activeUsers);
  }
}
