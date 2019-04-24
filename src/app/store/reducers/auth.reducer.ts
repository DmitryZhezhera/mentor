import * as AuthActions from '../actions/auth.actions';
import {AuthState} from '../../models/authState';

const initialState: AuthState = {
    user: {
        firstName: 'Guest',
        lastName: '',
        login: false
    }
};


export function authReducer(state = initialState, action: AuthActions.AuthActions): AuthState {
    switch (action.type) {
        case AuthActions.ACTION_LOGIN: {
            // const user: User = action.payload;
            console.log(`ACTION_LOGIN payload_ ${action.payload}`);
            return {
                ...state,
                user: {
                    login: true,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                }
            };
        }
        case AuthActions.ACTION_LOGOUT:
            return {
                ...state,
                user: {
                    firstName: 'Guest',
                    lastName: '',
                    login: false
                }
            };
        default :
            return state;
    }
    return state;
}
