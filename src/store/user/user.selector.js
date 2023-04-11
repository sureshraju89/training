export function getUserLoading(state) {
    return state.UserReducer.isLoading;
}

export function getUserName(state) {
    return state.UserReducer.user.name;
}

export function getUserAge(state) {
    return state.UserReducer.user.age;
}