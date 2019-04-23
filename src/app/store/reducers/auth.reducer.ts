import * as AuthActions from '../actions/auth.actions';
import {User} from '../../models/user';

const initialState: User = {
    // user: User = {
    //     firstName: 'Guest',
    //     lastName: '',
    //     loggedIn: false
    // }

    // user: {
    //     firstName: 'Guest',
    //     lastName: '',
    //     loggedIn: false
    // }
    firstName: 'Guest',
    lastName: '',
    login: true
};

export function authReducer(state = initialState, action: AuthActions.AuthActions): User {
    switch (action.type) {
        case AuthActions.ACTION_LOGIN:
            return {
                ...state,
                login: true,
                firstName: 'Dmitriy',
                lastName: 'Zhezhera',
            };
        case AuthActions.ACTION_LOGOUT:
            return {
                ...state,
                firstName: 'Guest',
                lastName: '',
                login: false
            };
        default :
            return state;
    }
    return state;
}
