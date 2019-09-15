import {Injectable} from '@angular/core';
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  user: User = {
    userData: {
      userName: '',
      mail: '',
    },
    secret: ['What is your mom\'s maiden name?', 'What is your dog name?', 'What is your English level'],
    questionAnswer: '',
    gender: ''
  };

  getUser(): User {
    return this.user;
  }
}
