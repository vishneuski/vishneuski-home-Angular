import { Component } from '@angular/core';
import { User } from './models/User';
import {UsersService} from "./services/users.service";
import {CounterService} from "./services/counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[];

  constructor(private userService: UsersService){}

  ngOnInit() {
    this.users = this.userService.getData();
  }

  changeStatus(event: User) {
    this.users = this.users.filter(
      (user: User) => {
        console.log(user.name);
        return user.status === true;
      }
    )
  }
}
