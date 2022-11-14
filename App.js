import * as React from 'react';
import { Provider } from 'react-redux';
import store  from "./redux/store/index";
import Clients from "./components/Clients"

export default function App() {
  return (
    <Provider store={store}>
      <Clients />
    </Provider>
  );
}
