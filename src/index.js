import React from 'react';
import {Provider} from 'react-redux';

import './configs/ReactotronConfig';
import {store} from './store';

import App from './App';

const Index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Index;
