import {Injectable} from '@angular/core';
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
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
    for (let user of this.users) {
      if (user.name === event.name) {
        user.status = !user.status;
      }
    }
  }

  changeToActiveStatus(event: User) {
    for (let user of this.users) {
      if (user.name === event.name) {
        user.status = !user.status;
      }
    }
  }
}
