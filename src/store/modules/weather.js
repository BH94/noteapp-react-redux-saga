import { handleActions, createAction } from "redux-actions";
import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

const GET_WEATHER_PENDING = "GET_WEATHER_PENDING";
const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
const GET_WEATHER_FAILURE = "GET_WEATHER_FAILURE";

function getAPI() {
  return axios.get(
    "http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&APPID=e75a0a68adc50371c5898d8d43931062"
  );
}

export const getWeather = createAction(GET_WEATHER_PENDING);

function* getWeatherSaga(action) {
  try {
    const response = yield call(getAPI, action.payload);
    yield put({ type: GET_WEATHER_SUCCESS, payload: response.data });
  } catch (err) {
    yield put({
      type: GET_WEATHER_FAILURE,
      payload: err,
    });
  }
}

const initialState = {
  loading: false,
  error: false,
  data: {
    area: "",
    temp: 0,
    weather: "",
  },
};

export function* weatherSaga() {
  yield takeEvery("GET_WEATHER_PENDING", getWeatherSaga);
}

export default handleActions(
  {
    [GET_WEATHER_PENDING]: (state, action) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    [GET_WEATHER_SUCCESS]: (state, action) => {
      const area = action.payload.name;
      const temp = action.payload.main.temp;
      const weather = action.payload.weather[0].main;

      return {
        ...state,
        loading: false,
        data: {
          area: area,
          temp: temp,
          weather: weather,
        },
      };
    },
    [GET_WEATHER_FAILURE]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
  },
  initialState
);
