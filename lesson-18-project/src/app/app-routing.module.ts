import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LogFormComponent} from './components/log-form/log-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: '', component: LogFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  exports: [
    RouterModule
  ],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ]
})
export class AppRoutingModule { }
