import {Component, OnInit} from '@angular/core';
import {Course} from '../../../models/course';
// import {COURSES} from '../../../mocks/mock-courses';
import {TeacherCoursesService} from '../../../services/teacher-courses/teacher-courses.service';
import {slideInBotomStateTrigger} from '../../../shared/animations/slideInBottom.animation';
import {fadeStateTrigger} from '../../../shared/animations/fade.animation';


@Component({
    selector: 'app-teacher',
    templateUrl: './teacher.component.html',
    styleUrls: ['./teacher.component.scss'],
    animations: [slideInBotomStateTrigger, fadeStateTrigger]
})
export class TeacherComponent implements OnInit {
    arrMyCourses: Course[] = [];
    showSpinner = true;

    constructor(private _http: TeacherCoursesService) {
    }

    ngOnInit() {
        this._http.getCourses()
            .subscribe(
                res => {
                    this.arrMyCourses = res.courses;
                    console.log('RES:', res);
                    console.log('this.arrMyCourses:', this.arrMyCourses);
                    this.showSpinner = false;
                    console.log('this.spinner_', this.showSpinner);
                },
                err => {
                    console.log(err);
                    this.showSpinner = false;
                }
            );
    }
}
