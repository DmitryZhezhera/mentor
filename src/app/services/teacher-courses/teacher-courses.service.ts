import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getBodyNode} from '@angular/animations/browser/src/render/shared';
import {environment} from '../../../environments/environment';

const {apiUrl} = environment;

@Injectable({
    providedIn: 'root'
})
export class TeacherCoursesService {

    private _registerCourseUrl = `${apiUrl}/addCourse`;
    private _updateCourseUrl = 'https://mentor-online-new.herokuapp.com/updateCourseId/';
    private _findCourseUrl = 'https://mentor-online-new.herokuapp.com/findCourse';
    private _getCourseByIdUrl = 'https://mentor-online-new.herokuapp.com/courseById/';
    private _getCourseByIdUrlCurrent: string;

    constructor(private _http: HttpClient) {
    }

    registerCourse(course) {
        console.log('registerCourse() course_', course);
        return this._http.post<any>(this._registerCourseUrl, course);
    }

    getCourses() {
        return this._http.get<any>(this._findCourseUrl);
    }

    getCourseById(ID: string) {
        // const body = {id: ID};
        this._getCourseByIdUrlCurrent = (this._getCourseByIdUrl + ID);
        return this._http.get<any>(this._getCourseByIdUrlCurrent);
    }

    updateCourse(course) {
        console.log('updateCourse course_', course);
        const url = this._updateCourseUrl + course.id;
        return this._http.post<any>(url, course);
    }

    getStudentsByCourse(ID_COURSE: string) {
        return this._http.get<any>(`${apiUrl}/studentsByCourse/${ID_COURSE}`);
    }

}
