import ReactDOM from "react-dom/client";

import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer.js";
import { spamFilter } from "./redux/middleware.js";

import App from "./App.jsx";
import "./index.css";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, spamFilter),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
