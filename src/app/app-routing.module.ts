import { RegisterStudentsComponent } from './components/register-students/register-students.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterCourseComponent } from './components/register-course/register-course.component';
import { RegisterClassMemoryComponent } from './components/register-class-memory/register-class-memory.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register-student', component: RegisterStudentsComponent},
  {path: 'register-course', component: RegisterCourseComponent},
  {path: 'register-class-memory', component: RegisterClassMemoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
