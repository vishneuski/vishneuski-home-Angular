import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskOne = 'Task one. Work with components';
  taskTwo = 'Task two. Data binding';
  taskThree = 'Task three. Styles';

}
