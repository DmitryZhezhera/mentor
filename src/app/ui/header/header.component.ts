import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
// import {User} from '../../models/user';
import {Router} from '@angular/router';
import * as authActions from '../../store/actions/auth.actions';
import {AuthState} from '../../models/authState';
import {fadeStateTrigger} from '../../shared/animations/fade.animation';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [fadeStateTrigger]
})
export class HeaderComponent implements OnInit {
    store$: Observable<AuthState>;

    constructor(private _store: Store<AuthState>,
                private _router: Router) {
    }

    ngOnInit() {
        this.store$ = this._store.select('authReducer');
    }

    logOut() {
        localStorage.clear();
        this._store.dispatch(new authActions.AuthLogOut);
        this._router.navigate(['guest']);
    }
}
