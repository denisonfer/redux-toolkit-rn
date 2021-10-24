import {all} from 'redux-saga/effects';

import theme from './slices/theme/sagas';

export default function* rootSaga() {
  return yield all([theme]);
}
