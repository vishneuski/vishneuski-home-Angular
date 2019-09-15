import {Injectable} from '@angular/core';
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  secrets: string[] = ['What is your mother last name?', 'What is your dog name?', 'What is your English level'];

  user: User = {
    userName: '',
    mail: '',
    secret: this.secrets[0],
    questionAnswer: '',
    gender: ''
  };

  getUser(): User {
    return this.user;
  }
}
