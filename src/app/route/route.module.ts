import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';
import {TodoComponent} from '../todo/todo.component';
import {RegisterComponent} from '../register/register.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'app', component: TodoComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: false})
  ],
  declarations: []
})
export class RouteModule { }
