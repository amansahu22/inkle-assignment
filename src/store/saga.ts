import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_EMAILS } from "../api/get-emails";

function* fetchUser(): any {
  try {
    const data = yield call(FETCH_EMAILS);
    yield put({ type: "SET_MAIL_LIST", data: data });
  } catch (e) {
    alert("error in doing api call, make sure internet is on");
  }
}

function* mySaga() {
  yield takeEvery("GET_MAIL_LIST", fetchUser);
}

export default mySaga;
