import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import themeReducer from './slices/theme';
import websocketReducer from './slices/websocket';
import socketReducer from './slices/socket';

const rootReducer = combineReducers({
  theme: themeReducer,
  websocket: websocketReducer,
  socket: socketReducer,
});

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const middleware = [sagaMiddleware];
const persisConfig = {
  key: 'redux_toolkit',
  storage: AsyncStorage,
  whitelist: ['theme', 'websocket'],
};

const persistedReducer = persistReducer(persisConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false, serializableCheck: false}).concat(
      middleware,
    ),
  enhancers: [console.tron.createEnhancer()],
});
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
