import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import themeReducer from './slices/theme';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
  enhancers: [console.tron.createEnhancer()],
});

sagaMiddleware.run(rootSaga);

export {store};
