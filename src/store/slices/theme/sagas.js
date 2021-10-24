import {all, call, put, takeLatest} from '@redux-saga/core/effects';
import {Alert} from 'react-native';

import sagaActions from '../../sagaActions';
import {requestGetData} from '../../../services/requests/theme';
import {updateThemeToDark} from '.';

function* getData() {
  try {
    yield call(requestGetData);
    //yield put(updateThemeToDark())
  } catch (error) {
    console.tron.log('[GET DATA ERROR] => :', error);
    Alert.alert('Erro interno no middleware SAGA');
  }
}

export default all([takeLatest(sagaActions.theme.REQUEST_API, getData)]);
