import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../models/course';

@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
    @Input() link: string;

    @Input() course: Course;

    constructor() {
    }

    ngOnInit() {
    }

    onSubscribe() {
        console.log('Subscribe is clicked');
    }
}
