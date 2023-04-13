import { UserActionTypes, userInitialState } from './user.model';

const reducer = (state = userInitialState, action) => {
    switch (action.type) {
        case UserActionTypes.CREATE_USER_REQUEST:
            alert("I am in request user reducer");
            return {
                ...state,
                isLoading: true,
            };

        case UserActionTypes.CREATE_USER_SUCCESS:
            alert("I am in success user reducer");
            return {
                ...state,
                isLoading: false,
                user: action.payload
            };

        case UserActionTypes.CREATE_USER_FAILURE:
            return {
                ...state,
                isLoading: false
            };

        default:
            return state;
    }
}

export { reducer as UserReducer };