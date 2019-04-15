import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentComponent} from './pages/student/student.component';
import {StudentRoutingModule} from './student-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    declarations: [StudentComponent],
    imports: [
        CommonModule,
        StudentRoutingModule,
        SharedModule,
        MatProgressSpinnerModule
    ]
})
export class StudentModule {
}
