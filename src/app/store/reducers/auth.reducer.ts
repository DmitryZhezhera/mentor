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
    login: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions): User {
    switch (action.type) {
        case AuthActions.ACTION_LOGIN: {
            const user: User = action.payload;
            return {
                ...state,
                login: true,
                firstName: user.firstName,
                lastName: user.lastName,
            };
        }
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
