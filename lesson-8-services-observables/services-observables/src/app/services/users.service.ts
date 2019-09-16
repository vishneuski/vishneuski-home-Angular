import {Injectable} from '@angular/core';
import {User} from "../models/User";
import {CounterService} from "./counter.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private counterService: CounterService) {
  }

  users: User[] = [{
    name: 'Alex',
    status: true
  }, {
    name: 'Sergey',
    status: false
  }, {
    name: 'Kate',
    status: false
  }, {
    name: 'Liza',
    status: true
  }];

  getData(): User[] {
    return this.users;
  }

  changeToInactiveStatus(event: User) {
    this.counterService.countChanges('Change status to Inactive');
    for (let user of this.users) {
      if (user.status === true) {
        user.status = !user.status;
      }
    }
  }

  changeToActiveStatus(event: User) {
    this.counterService.countChanges('Change status to Active');
    for (let user of this.users) {
      if (user.status === false) {
        user.status = !user.status;
      }
    }
  }
}
