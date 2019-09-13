import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerControlComponent } from './containers/timer-control/timer-control.component';
import { OddComponent } from './components/odd/odd.component';
import { EvenComponent } from './components/even/even.component';

@NgModule({
  declarations: [TimerControlComponent, OddComponent, EvenComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TimerControlComponent,
    OddComponent,
    EvenComponent
  ]
})
export class TimerControlModule { }
