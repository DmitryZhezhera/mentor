import {authReducer} from './auth.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {AuthState} from '../../models/authState';

interface AppState {
    authReducer: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
    authReducer: authReducer
};
