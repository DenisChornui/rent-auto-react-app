import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from 'components/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { Context } from 'components/Helpers/Context';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/rent-auto-react-app">
        <Context>
          <App />
          <GlobalStyle />
        </Context>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
