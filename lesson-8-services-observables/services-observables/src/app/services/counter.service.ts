import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = 0;

  countChanges(item: string) {
    this.counter++;
    console.log(item, this.counter);
  }
}
