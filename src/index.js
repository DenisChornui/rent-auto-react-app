// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import { GlobalStyle } from 'components/GlobalStyle';
// import { Provider } from 'react-redux';
// import { persistor, store } from 'redux/store';
// import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
// import {App} from 'components/App';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <BrowserRouter basename="/rent-auto-react-app">
//           <App/>
//           <GlobalStyle />
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from 'components/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {App} from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      
        <BrowserRouter basename="/rent-auto-react-app">
          <App/>
          <GlobalStyle />
        </BrowserRouter>
      
    </Provider>
  </React.StrictMode>
);