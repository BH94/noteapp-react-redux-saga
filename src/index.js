import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

import { createStore, applyMiddleware } from "redux";
import modules, { rootSaga } from "./store/modules"; //수정 (4)

import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga"; //추가

const reduxLogger = createLogger();
// const devTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware(); //추가

const store = createStore(
  modules,
  applyMiddleware(reduxLogger, sagaMiddleware)
); //수정
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
