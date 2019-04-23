import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {User} from '../../models/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    user$: Observable<User>;

    constructor(private store: Store<User>) {
    }

    ngOnInit() {
        this.user$ = this.store.select('authReducer');
        console.log('this.user: ', this.user$);
        console.log('this.store: ', this.store);
        // TODO HOW CAN I LOG OUT CURRENT STATE
    }
}
