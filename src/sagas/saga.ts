import { takeEvery, all } from "redux-saga/effects";
import { addEmail, fetchEmails, signIn } from "../features/userSlice";
import { addEmailHandler, fetchEmailsHandler, signInHandler } from "./handlers";

function* watchSignIn() {
  yield takeEvery(signIn.type, signInHandler);
}

function* watchAddEmail() {
  yield takeEvery(addEmail.type, addEmailHandler);
}

function* watchFetchEmails() {
  yield takeEvery(fetchEmails.type, fetchEmailsHandler);
}

export function* rootSaga() {
  yield all([watchSignIn(), watchAddEmail(), watchFetchEmails()]);
}
