import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
    <div>{{message}}</div>
  `,
  styles: ['div{box-sizing: border-box; margin: 0 auto; width: 50vw; min-width: 10em; height: 3em; line-height: 3em; color: mediumseagreen; background-color: #d4edda;border-color: #c3e6cb; text-align: center; font-family: sans-serif, Verdana; font-weight: lighter; border-radius: 0.25em;}']
})
export class SuccessAlertComponent implements OnInit {
  message = 'All right!';

  constructor() {
  }

  ngOnInit() {
  }

}
