import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import note from "./note";
import weather, { weatherSaga } from "./weather";
import loading from "./loading";

export default combineReducers({
  note,
  weather,
  loading,
});

export function* rootSaga() {
  yield all([weatherSaga()]);
}
