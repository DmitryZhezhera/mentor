import { Component, OnInit } from '@angular/core';
import {fadeStateTrigger} from '../../../shared/animations/fade.animation';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
  animations: [fadeStateTrigger]
})
export class CreateCourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
