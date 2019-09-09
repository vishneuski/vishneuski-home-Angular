import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-name-input',
  templateUrl: './user-name-input.component.html',
  styleUrls: ['./user-name-input.component.css']
})
export class UserNameInputComponent implements OnInit {
  userName = 'Sergey';

  resetValue() {
    this.userName = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
