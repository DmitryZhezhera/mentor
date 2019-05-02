import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

import {State, Store} from '@ngrx/store';
import * as authActions from '../../store/actions/auth.actions';
import {User} from '../../models/user';

const {apiUrl} = environment;

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: User = {firstName: '', lastName: '', login: false};

    constructor(private http: HttpClient,
                private _store: Store<User>,
                private _state: State<User>) {
    }

    registerUser(user) {
        console.log('AuthService_ registerUser', user);
        return this.http.post<any>(`${apiUrl}/addUser`, user);
    }

    loginUser(user) {
        console.log('AuthService_ loginUser', user);
        return this.http.post<any>(`${apiUrl}/login`, user);
    }

    loggedIn() {
        if (this._state.getValue().authReducer.user.login) {
            return true;
        }
        if (localStorage.getItem('token')) {
            this.user.firstName = this._state.getValue().authReducer.user.firstName;
            this.user.lastName = this._state.getValue().authReducer.user.lastName;
            this.user.login = true;
            // console.log('_state: ', this._state.getValue());
            this._store.dispatch(new authActions.AuthLogIn(this.user));
            return true;
        }

        return false;
    }

    token() {
        return localStorage.getItem('token');
    }
}
