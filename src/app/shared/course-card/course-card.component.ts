import {Component, OnInit} from '@angular/core';
import {Course} from '../../models/course';

@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

    course: Course;

    constructor() {
    }

    ngOnInit() {
    }
}
