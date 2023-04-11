export const UserActionTypes = {
    CREATE_USER_REQUEST: "@@user/CREATE_USER_REQUEST",
    CREATE_USER_SUCCESS: "@@user/CREATE_USER_SUCCESS",
    CREATE_USER_FAILURE: "@@user/CREATE_USER_FAILURE",
}

export const userInitialState = {
    user: {},
    isLoading: false
}