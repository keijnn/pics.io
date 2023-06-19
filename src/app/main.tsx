//import modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

//import pages
import { Pages } from '@/pages';

//import store
import { store } from '@/shared/store';

//import styles
import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Pages />
    </Provider>
  </React.StrictMode>,
);
