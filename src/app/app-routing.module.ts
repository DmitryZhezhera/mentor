import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthGuard} from './auth.guard';
import {GuestComponent} from './components/guest/guest.component';
import {CoursePreviewComponent} from './shared/course-preview/course-preview.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {
        path: '',
        loadChildren: './student/student.module#StudentModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'student',
        loadChildren: './student/student.module#StudentModule',
        canActivate: [AuthGuard],
        resolve: {}
    },
    {
        path: 'teacher',
        loadChildren: './teacher/teacher.module#TeacherModule',
        canActivate: [AuthGuard]
    },
    {path: 'guest', component: GuestComponent},
    {path: 'guest/preview/:id', component: CoursePreviewComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
