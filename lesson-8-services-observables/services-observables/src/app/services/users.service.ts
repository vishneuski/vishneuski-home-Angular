import {Injectable} from '@angular/core';
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [{
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
    console.log(this.users);
    return this.users;
  }

  showInactiveUsers() {
    return this.users.filter((item: User) => {
      console.log(item);
      return item.status === false
    })
  }

  showActiveUsers() {
    return this.users.filter((item: User) => {
      return item.status !== false
    })
  }

  // changeStatus() {
  //   this._users[status] = !this._users[status];
  // }

}
