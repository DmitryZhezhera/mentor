import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Course} from '../../../models/course';
import {TeacherCoursesService} from '../../../services/teacher-courses/teacher-courses.service';
import {switchMap} from 'rxjs/operators';


@Component({
    selector: 'app-course-builder',
    templateUrl: './course-builder.component.html',
    styleUrls: ['./course-builder.component.scss']
})
export class CourseBuilderComponent implements OnInit {
    showSpinner = true;
    course: Course;
    curID: string;
    students: string[] = null;

    // public imagePath;
    imgURL: any;
    public message: string;

    constructor(private _http: TeacherCoursesService,
                private _activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        console.log('this.course_', this.course);
        this.curID = this._activatedRoute.snapshot.paramMap.get('id');
        console.log('this.curID', this.curID);
        this._http.getCourseById(this.curID)
            .subscribe(
                res => {
                    this.course = res.message;
                    console.log('RES:', res);
                    console.log('this.course:', this.course);
                    this.showSpinner = false;
                },
                err => {
                    console.log(err);
                    this.showSpinner = false;
                }
            );
        this._http.getCourseStudents(this.curID)
            .subscribe(
                res => {
                    this.students = res;
                    console.log('RES:', res);
                    console.log('this.students:', this.students);
                    // this.showSpinner = false;
                },
                err => {
                    console.log(err);
                    // this.showSpinner = false;
                }
            );
    }

    // onFileSelected(event) {
    //     console.log(event);
    //     this.cardImgFile = <File> event.target.file[0];
    // }
    onChangePreview(files) {
        if (files.length === 0) {
            return;
        }

        const mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = 'Only images are supported.';
            return;
        }

        const reader = new FileReader();
        // this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
            // this.course.thumbnailImgFile = files[0];
            this.course.thumbnailImgFile = reader.result;
        };
        console.log(this.course);
        console.log(this.imgURL);
    }

    updateCourse() {
        console.log(this.course);
        this._http.updateCourse(this.course)
            .subscribe(
                res => {
                    console.log('RES:', res);
                },
                err => {
                    console.log(err);
                }
            );
    }

}
