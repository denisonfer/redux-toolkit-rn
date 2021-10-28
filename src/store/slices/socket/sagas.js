import {all, call, put, takeLatest} from '@redux-saga/core/effects';
import {webSocket} from '@react-native-community/rxjs/webSocket';
import configs from '../../../../configs';

import {updateStatus} from '.';

function* mySocketHandler({payload}) {
  const url = 'wss://6myfikchb1.execute-api.sa-east-1.amazonaws.com/dev';
  const wsPresence = webSocket({url: `${url}/?token=${configs.token}`});
  wsPresence.subscribe(async status => console.tron.log('status', status));

  console.tron.log('wsPresence', wsPresence);
}

export default all([takeLatest(updateStatus.type, mySocketHandler)]);
