import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const {apiUrl} = environment;


@Injectable({
    providedIn: 'root'
})
export class GuestService {

    constructor(private _http: HttpClient) {

    }

    getTop5() {
        return this._http.get<any>(`${apiUrl}/top5`);
    }

    getCoursePreviewById(ID: string) {
        return this._http.get<any>(`${apiUrl}/courseById/${ID}`);
    }

    subscribeOnCourse(ID: string) {
        return this._http.post<any>(`${apiUrl}/addSubscription/${ID}`, '');
    }
}
