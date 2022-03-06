import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { Email, fetchEmails, setEmails, setUser } from "../features/userSlice";
import {
  addEmailToFirebase,
  getEmailsFromFirebase,
  getUserFromFirebase,
  signInWithFirebase,
} from "../firebase";

export function* signInHandler() {
  yield call(signInWithFirebase);
  const currentUser = getUserFromFirebase();
  yield put(setUser(currentUser));
}

export function* addEmailHandler(action: PayloadAction<Email>) {
  yield call(addEmailToFirebase, action.payload);
  yield put(fetchEmails());
}

export function* fetchEmailsHandler() {
  const emails: Email[] = yield call(getEmailsFromFirebase);
  yield put(setEmails(emails));
}
