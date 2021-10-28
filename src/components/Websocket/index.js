import {webSocket} from '@react-native-community/rxjs/webSocket';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {WebSocketSignalR} from '../../services/websockets/WebSocketSignalR';
import {saveConnection} from '../../store/slices/websocket';

import configs from '../../../configs';

const Websocket = () => {
  const dispatch = useDispatch();

  const handleWebsocket = useCallback(() => {
    dispatch({type: saveConnection.type, payload: connectionRef});
  }, [dispatch]);

  const [signalRConnection, setSignalRConnection] = useState(null);
  console.tron.log('signalRConnection', signalRConnection);

  const connectionRef = useRef(null);
  console.tron.log('connectionRef', connectionRef);

  function initConnection() {
    WebSocketSignalR()
      .initSocketConnection(() => {
        console.log('init socket');
      })
      .then(value => {
        if (value) {
          setSignalRConnection(value);
          connectionRef.current = value;
        }
      });
  }

  useEffect(() => {}, []);

  useEffect(() => {
    if (connectionRef.current) {
      connectionRef.current.onclose(() => {
        setTimeout(() => {
          initConnection();
        }, 1500);
      });
    }
  }, [signalRConnection]);

  return (
    <View>
      <Button title="Conectar ao websocket" onPress={handleWebsocket} />
    </View>
  );
};

export default Websocket;
