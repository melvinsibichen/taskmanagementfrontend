import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TasksComponent } from './Tasks/Tasks.component';
import { UserTasksComponent } from './user-Tasks/user-Tasks.component';
import { AddTasksComponent } from './add-Tasks/add-Tasks.component';

const myRoutes:Routes = [
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"userReg",
    component:UserRegComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"userProfile",
    component:UserProfileComponent
  },
  {
    path:"viewAdminTasks",
    component: TasksComponent
  },
  {
    path:"viewUserTasks",
    component: UserTasksComponent
  },
  {
    path:"addTasks",
    component: AddTasksComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegComponent,
    DashboardComponent,
    AdminNavComponent,
    UserProfileComponent,
    NavbarComponent,
    TasksComponent,
    UserTasksComponent,
    AddTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
