import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterStudentsComponent } from './components/register-students/register-students.component';
import { RegisterCourseComponent } from './components/register-course/register-course.component';
import { RegisterClassMemoryComponent } from './components/register-class-memory/register-class-memory.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterStudentsComponent,
    RegisterCourseComponent,
    RegisterClassMemoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
