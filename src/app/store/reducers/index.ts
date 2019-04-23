import {authReducer} from './auth.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {User} from '../../models/user';

interface AppState {
    authReducer: User;
}

export const reducers: ActionReducerMap<AppState> = {
    authReducer: authReducer
};
