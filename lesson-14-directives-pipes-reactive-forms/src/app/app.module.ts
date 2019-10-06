import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FormComponent} from './form/form.component';
import {FormService} from './form/form.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule],
  declarations: [
    AppComponent,
    FormComponent],
  bootstrap: [AppComponent],
  providers: [FormService]
})
export class AppModule {
}
