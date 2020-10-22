import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { mainReducer } from "./store/reducers/index";
import {BrowserRouter as Router} from 'react-router-dom'

import App from "./App";
const store = createStore(mainReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Router>
    <Provider store={store}>
        <App />
     </Provider>
    </Router>
    , document.getElementById('root')
);
