import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../../../models/course';
import {TeacherCoursesService} from '../../../services/teacher-courses/teacher-courses.service';
import {HttpEventType} from '@angular/common/http';


@Component({
    selector: 'app-course-builder',
    templateUrl: './course-builder.component.html',
    styleUrls: ['./course-builder.component.scss']

})
export class CourseBuilderComponent implements OnInit, OnChanges {
    showSpinner = true;
    course: Course;
    curID: string;

    students: Object[] = null;
    showStudentsSpinner = true;
    unsaved = false;

    imgURL: any;
    public message: string;

    cardImgFile: File;

    newLesson = {
        uploading: false,
        progress: '0%',
        file: null,
        name: '',
        public: false
    };

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

    ngOnChanges(changes: SimpleChanges): void {
        this.unsaved = true;
        console.log('ngOnChanges', changes);
        // TODO DONT WORK ????
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

    onChangeLessonFile(files) {
        this.newLesson.file = files[0];
    }

    onUpLoadLesson() {
        const fd = new FormData();
        fd.set('file', this.newLesson.file);
        fd.set('name', this.newLesson.name);
        fd.set('public', this.newLesson.public + '');

        this.newLesson.uploading = true;
        this.newLesson.progress = '0%';
        console.log('onUpLoadLesson formData:', fd);
        this._http.uploadVideoLesson(fd, this.curID)
            .subscribe(event => {
                    if (event.type === HttpEventType.UploadProgress) {
                        this.newLesson.progress = +(event.loaded / event.total * 100).toFixed(2) + '%';
                    } else if (event.type === HttpEventType.Response) {
                        console.log(`Response_`, event);
                    }
                }
            );
    }

    onPublicClick(element) {
        this.newLesson.public = element.checked;
        console.log(element);
        console.log(this.newLesson);
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
        // if (this.cardImgFile) {
        //     this._http.updateThumbnail(this.cardImgFile, this.curID)
        //         .subscribe(
        //             res => {
        //                 console.log('uploadThumbnail RES:', res);
        //             },
        //             err => {
        //                 console.log(err);
        //             }
        //         );
        // }
        if (this.cardImgFile) {
            this._http.updateThumbnail(this.cardImgFile, this.curID)
                .subscribe(event => {
                        console.log('updateThumbnail SUBSCRIBE event: ', event.type);
                        if (event.type === HttpEventType.UploadProgress) {
                            console.log('updateThumbnail Uploading...');
                        } else if (event.type === HttpEventType.Response) {
                            console.log(`updateThumbnail Response_`, event);
                        }
                    }
                );
        }

    }
}
