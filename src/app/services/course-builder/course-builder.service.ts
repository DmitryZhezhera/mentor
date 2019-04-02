import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CourseBuilderService {

    // private _registerCourseUrl = 'https://test-mentor.herokuapp.com/add_curs';
    private _registerCourseUrl = 'https://mentor-online-new.herokuapp.com/addCourse';

    constructor(private _http: HttpClient) {
    }

    registerCourse(course) {
        console.log('registerCourse() course_', course);
        return this._http.post<any>(this._registerCourseUrl, course);
    }
}
