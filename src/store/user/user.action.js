import { action } from "typesafe-actions";
import { UserActionTypes } from "./user.model";

export const createUserRequest = (req) => action(UserActionTypes.CREATE_USER_REQUEST, req);
export const createUserSuccess = (res) => action(UserActionTypes.CREATE_USER_SUCCESS, res);
export const createUserFailure = (err) => action(UserActionTypes.CREATE_USER_FAILURE, err);
