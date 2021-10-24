import {NativeModules} from 'react-native';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import reacotronSaga from 'reactotron-redux-saga';

let scriptHostname;

if (__DEV__) {
  const {scriptURL} = NativeModules.SourceCode;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];
  console.log('scriptHostname', scriptHostname);

  const tron = Reactotron.configure({host: scriptHostname})
    .useReactNative()
    .use(reactotronRedux())
    .use(reacotronSaga())
    .connect();

  console.tron = tron;

  tron.clear();
}
