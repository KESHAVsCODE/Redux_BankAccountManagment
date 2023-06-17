import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import { createStore } from "redux";

import { Provider } from "react-redux";
import bankAccountingReducer from "./reducers/bankAccountingReducer";

const store = createStore(
  bankAccountingReducer,
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <Provider store={store}>
      <App />
    </Provider>
  </MantineProvider>
);

export default store;
