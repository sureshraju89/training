import { call, put, takeEvery } from 'redux-saga/effects';
import * as UserActions from './user.action';
import UserAPI from './user.api';
import { UserActionTypes } from './user.model';

export function* handleCreate(action) {
    try {
        const response = yield call(UserAPI.CreateUser, action.payload);
        yield put(UserActions.createUserSuccess(response));
    } catch (e) {
        yield put(UserActions.createUserFailure(e));
    }
}

export function* UserSaga() {
    yield takeEvery(UserActionTypes.CREATE_USER_REQUEST, handleCreate);
}
