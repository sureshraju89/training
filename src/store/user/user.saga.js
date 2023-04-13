import { call, put, takeEvery } from 'redux-saga/effects';
import * as UserActions from './user.action';
import UserAPI from './user.api';
import { UserActionTypes } from './user.model';
import Swal from 'sweetalert2';

export function* handleCreate(action) {
    try {
        alert("I am in request user saga");
        const response = yield call(UserAPI.CreateUser, action.payload);
        yield put(UserActions.createUserSuccess(response));
        Swal.fire({
            title: "User Update",
            text: "user Updated Successfully",
            icon: "success"
        })
    } catch (e) {
        Swal.fire({
            title: "User Update",
            text: e.message,
            icon: "error"
        })
        yield put(UserActions.createUserFailure(e));
    }
}

export function* handleSuccess(action) {
    alert("I am in success user saga");
}

export function* UserSaga() {
    yield takeEvery(UserActionTypes.CREATE_USER_REQUEST, handleCreate);
    yield takeEvery(UserActionTypes.CREATE_USER_SUCCESS, handleSuccess);
}
