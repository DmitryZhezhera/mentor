import {Component, HostBinding, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as authActions from '../../store/actions/auth.actions';

import {User} from '../../models/user';
import {fadeStateTrigger} from '../../shared/animations/fade.animation';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [fadeStateTrigger]
})
export class LoginComponent implements OnInit {

    loginUserData = {login: '', password: ''};
    user: User = {firstName: 'guest', lastName: 'guest', login: false};
    failed: boolean;

    // @HostBinding('@fade') animate = true;
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
                    this.user.login = true;
                    console.log('loginUser this.user_', this.user);
                    this._store.dispatch(new authActions.AuthLogIn(this.user));
                    this._router.navigate(['student']);
                },
                err => {
                    console.log(err);
                    if (err.error === 'Not Found') {
                        this.failed = true;
                    }
                }
            );
    }
}
