import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ReactHomePage from "./redux/ReduxHomePage";
import allReducers from "./redux/reducers";
import CounterApp from "./redux/CounterApp";

let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const Redux = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ReactHomePage />} />
          <Route path="/home" element={<ReactHomePage />} />
          <Route path="/redux" element={<ReduxPractice />} />
        </Routes>
      </Router>
    </>
  );
};
c;

export default Redux;
