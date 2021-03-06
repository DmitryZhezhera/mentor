import {Component, OnInit} from '@angular/core';
import {Course} from '../../../models/course';
import {StudentService} from '../../../services/student/student.service';
import {GuestService} from '../../../services/guest/guest.service';

import {slideInRightStateTrigger} from '../../../shared/animations/slideInRight.animation';
import {slideInLeftStateTrigger} from '../../../shared/animations/slideInLeft.animation';
import {fadeStateTrigger} from '../../../shared/animations/fade.animation';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss'],
    animations: [slideInRightStateTrigger, slideInLeftStateTrigger, fadeStateTrigger]
})
export class StudentComponent implements OnInit {
    arrSubscribedCourses: Course[] = [];
    arrTopCourses: Course[] = [];
    showSpinnerSubscribed = true;
    showSpinnerTop5 = true;

    constructor(private _studentService: StudentService,
                private _guestService: GuestService) {
    }

    ngOnInit() {
        this._studentService.getCoursesByStudent()
            .subscribe(
                res => {
                    this.arrSubscribedCourses = res.studentCourses;
                    console.log('RES getSubscribedCourses :', res);
                    console.log('this.arrSubscribedCourses:', this.arrSubscribedCourses);
                    this.showSpinnerSubscribed = false;
                },
                err => {
                    console.log(err);
                }
            );

        this._guestService.getTop5()
            .subscribe(
                res => {
                    this.arrTopCourses = res.top;
                    console.log('RES getTop5 :', res);
                    console.log('this.arrTopCourses:', this.arrTopCourses);
                    this.showSpinnerTop5 = false;
                },
                err => {
                    console.log(err);
                }
            );
    }
}
