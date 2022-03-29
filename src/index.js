import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducers } from "./redux/rootRecucers";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { spamFilter } from "./redux/middleware";

const store = createStore(rootReducers, compose(
  applyMiddleware(
    thunk,
    spamFilter
  ),
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
