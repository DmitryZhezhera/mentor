import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeacherComponent} from './pages/teacher/teacher.component';
import {TeacherRoutingModule} from './teacher-routing.module';
import {CreateCourseComponent} from './components/create-course/create-course.component';
import {CourseBuilderComponent} from './pages/course-builder/course-builder.component';
import {FormsModule} from '@angular/forms';
import { CourseRegisterComponent } from './pages/course-register/course-register.component';
import {components} from './components';
import {SharedModule} from '../shared/shared.module';
import {MatTabsModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    declarations: [TeacherComponent, CreateCourseComponent, CourseBuilderComponent, CourseRegisterComponent],
    imports: [
        CommonModule,
        TeacherRoutingModule,
        FormsModule,
        SharedModule,
        MatTabsModule,
        MatProgressSpinnerModule
    ]
})
export class TeacherModule {
}
