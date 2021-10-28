import {all, call, put, takeLatest} from '@redux-saga/core/effects';

import {saveConnection} from '.';
import {initConnection} from '../../../services/websockets/initConnection';
import {updateStatus} from '../socket';

function* initMyWebSocket({payload}) {
  console.tron.log('payload initMyWebSocket', payload);
  const response = yield call(initConnection, {connectionRef: payload});
  const {connection, connectionRef} = response;
  console.tron.log('connection initMyWebSocket', connection);
  console.tron.log('connectionRef initMyWebSocket', connectionRef);

  console.tron.log('updateStatus.type', updateStatus.type);

  yield put({type: updateStatus.type, payload: connectionRef});
}

export default all([takeLatest(saveConnection.type, initMyWebSocket)]);
