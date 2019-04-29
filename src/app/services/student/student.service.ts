import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const {apiUrl} = environment;

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    constructor(private _http: HttpClient) {

    }

    getCoursesByStudent() {
        return this._http.get<any>(`${apiUrl}/coursesByStudent`);
    }
}
