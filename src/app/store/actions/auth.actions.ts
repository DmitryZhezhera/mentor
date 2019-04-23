import {Action} from '@ngrx/store';

export const ACTION_LOGIN = 'ACTION_LOGIN';
export const ACTION_LOGOUT = 'ACTION_LOGOUT';

export class AuthLogIn implements Action {
    readonly type = ACTION_LOGIN;
}
export class AuthLogOut implements Action {
    readonly type = ACTION_LOGOUT;
}

export type AuthActions = AuthLogIn | AuthLogOut;
