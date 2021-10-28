import {all} from 'redux-saga/effects';

import theme from './slices/theme/sagas';
import websocket from './slices/websocket/sagas';
import socket from './slices/socket/sagas';

export default function* rootSaga() {
  return yield all([theme, websocket, socket]);
}
