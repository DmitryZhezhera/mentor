import {Component, OnInit} from '@angular/core';
import {Course} from '../../models/course';
import {ActivatedRoute} from '@angular/router';
import {VIDEO_LINKS} from '../../mocks/mock-course-video-links';
import {VIDEO} from '../../models/video';
import {DomSanitizer} from '@angular/platform-browser';
import {GuestService} from '../../services/guest/guest.service';

@Component({
    selector: 'app-course-preview',
    templateUrl: './course-preview.component.html',
    styleUrls: ['./course-preview.component.scss']
})
export class CoursePreviewComponent implements OnInit {
    course: Course;
    curID: string;
    currentLesson?: VIDEO;
    trustedLessonUrl;

    constructor(private _http: GuestService,
                private _activatedRoute: ActivatedRoute,
                private _sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.curID = this._activatedRoute.snapshot.paramMap.get('id');
        console.log('this.curID', this.curID);
        this._http.getCoursePreviewById(this.curID)
            .subscribe(
                res => {
                    this.course = res.message;
                    // this.course.arrVideo = res.videos;
                    this.currentLesson = this.course.arrVideo[0];
                    if (this.currentLesson) {
                        this.trustedLessonUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.currentLesson.link);
                    }
                    console.log('RES:', res);
                    console.log('this.course:', this.course);
                    console.log('this.currentLesson_', this.currentLesson);
                    console.log('this.trustedLessonUrl_', this.trustedLessonUrl);
                },
                err => {
                    console.log(err);
                }
            );
    }

    onSubscribe() {
        console.log('SUBSCRIBE BTN PRESSED');
        this._http.subscribeOnCourse(this.curID)
            .subscribe(
                res => {
                    this.course = res.message;
                    console.log('RES:', res);
                },
                err => {
                    console.log(err);
                }
            );
    }

    onLessonClick(id) {
        if (this.course.arrVideo) {
            for (let i = 0; i < this.course.arrVideo.length; i++) {
                if (id === this.course.arrVideo[i].id) {
                    this.currentLesson = this.course.arrVideo[i];
                    this.trustedLessonUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.currentLesson.link);
                    break;
                }
            }
            console.log('NEW currentLesson is ', this.currentLesson);
        }
    }
}
