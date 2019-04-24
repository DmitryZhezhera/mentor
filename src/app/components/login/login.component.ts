import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as authActions from '../../store/actions/auth.actions';

import {User} from '../../models/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginUserData = {};
    user: User = {firstName: 'guest', lastName: 'guest', login: false};

    constructor(private _auth: AuthService,
                private _router: Router,
                private _store: Store<User>) {
    }

    ngOnInit() {
    }

    cancel() {
        event.preventDefault();
        this._router.navigate(['']);
    }

    loginUser() {
        this._auth.loginUser(this.loginUserData)
            .subscribe(
                res => {
                    console.log(res);
                    localStorage.setItem('token', res.token);
                    this.user.firstName = res.userName.firstName;
                    this.user.lastName = res.userName.lastName;
                    console.log('loginUser this.user_', this.user);
                    this._store.dispatch(new authActions.AuthLogIn(this.user));
                    this._router.navigate(['student']);
                },
                err => console.log(err)
            );
    }
}
