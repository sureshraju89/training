import { UserActionTypes, userInitialState } from './user.model';

const reducer = (state = userInitialState, action) => {
    switch (action.type) {
        case UserActionTypes.CREATE_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
            };

        case UserActionTypes.CREATE_USER_SUCCESS:
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