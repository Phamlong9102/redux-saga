import { all } from 'redux-saga/effects';
import authSaga from 'features/auth/authSaga';
import DashboardSaga from 'features/dashboard/DashboardSaga';
import studentSaga from 'features/students/StudentSaga';
import citySaga from 'features/city/CitySaga';

export default function* rootSaga() {
  yield all([authSaga(), DashboardSaga(), studentSaga(), citySaga()]);
}
