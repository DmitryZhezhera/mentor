import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../../models/course';
import {TeacherCoursesService} from '../../../services/teacher-courses/teacher-courses.service';

@Component({
    selector: 'app-course-builder',
    templateUrl: './course-builder.component.html',
    styleUrls: ['./course-builder.component.scss']
})
export class CourseBuilderComponent implements OnInit {
    showSpinner = true;
    course: Course;
    curID: string;

    students: Object[] = null;
    showStudentsSpinner = true;

    imgURL: any;
    public message: string;

    cardImgFile: File;

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
        this._http.getStudentsByCourse(this.curID)
            .subscribe(
                res => {
                    this.students = res.usersId;
                    console.log('RES:', res);
                    console.log('this.students:', this.students);
                    this.showStudentsSpinner = false;
                },
                err => {
                    console.log(err);
                    this.showStudentsSpinner = false;
                }
            );
    }

    onUpdateThumbnail(files) {
        if (files.length === 0) {
            return;
        }

        const mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = 'Only images are supported.';
            return;
        }

        const reader = new FileReader();
        this.cardImgFile = files[0];
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
            this.course.thumbnailImgUrl = this.imgURL;
        };
    }

    updateCourse() {
        console.log(this.course);
        this._http.updateCourse(this.course)
            .subscribe(
                res => {
                    console.log('updateCourse RES:', res);
                },
                err => {
                    console.log(err);
                }
            );
        if (this.cardImgFile) {
            this._http.updateThumbnail(this.cardImgFile, this.curID)
                .subscribe(
                    res => {
                        console.log('uploadThumbnail RES:', res);
                    },
                    err => {
                        console.log(err);
                    }
                );
        }

    }
}
