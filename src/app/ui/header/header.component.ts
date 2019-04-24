import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import * as authActions from '../../store/actions/auth.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    user$: Observable<User>;

    constructor(private _store: Store<User>,
                private _router: Router) {
    }

    ngOnInit() {
        this.user$ = this._store.select('authReducer');
        console.log('this.user: ', this.user$);
        console.log('this.store: ', this._store);
        // TODO HOW CAN I LOG OUT CURRENT STATE
    }

    logOut() {
        localStorage.clear();
        this._store.dispatch(new authActions.AuthLogOut);
        this._router.navigate(['guest']);
    }
}
