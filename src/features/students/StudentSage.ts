import { PayloadAction } from "@reduxjs/toolkit";
import studentApi from "api/studentApi";
import { ListParams, Student, ListResponse } from "models";
import { call, takeLatest, put } from "redux-saga/effects";
import { studentActions } from "./StudentSlice";

function* fetchStudentList(action: PayloadAction<ListParams>) {
    try {
        const response: ListResponse<Student> = yield call(studentApi.getAll, action.payload)
        yield put(studentActions.fetchStudentListSuccess(response))
    } catch (error) {
        console.log('Failed to fetch student list', error)
        yield put(studentActions.fetchStudentListFailed())
    }
}

export default function* studentSaga() {
    yield takeLatest(studentActions.fetchStudentList, fetchStudentList) 
}