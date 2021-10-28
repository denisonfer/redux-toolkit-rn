import * as signalR from '@microsoft/signalr';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {webSocket} from '@react-native-community/rxjs/webSocket';

import configs from '../../../configs';

let connection: signalR.HubConnection = null;
let wsPresenceConnection = null;

const wsPresenceURL =
  'wss://6myfikchb1.execute-api.sa-east-1.amazonaws.com/dev';

const emailAS = 'denison.menezes@code7.com';
const id = '615dec50459f5b00014eb311';
const tokenAS = configs.token;

export const WebSocketSignalR = ref => {
  const initSocketConnection = async callback => {
    connection = null;

    if (emailAS && tokenAS) {
      connection = new signalR.HubConnectionBuilder()
        .withUrl(
          `https://omniserversocket.mozaik.cloud/chathub?username=${emailAS}&token=${tokenAS}`,
          {
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets,
          },
        )
        .configureLogging(signalR.LogLevel.Debug)
        .build();
      callback();

      if (connection) {
        WebSocketSignalR().startConnection(callback, connection);
      } else {
        WebSocketSignalR().startConnection(callback);
      }

      return connection;
    }
  };

  const startConnection = async (callback, con = null) => {
    if (connection?.start) {
      console.warn('tem connection');
      return connection
        ?.start()
        .then(() => {
          console.warn('Connection started');
          connection
            .invoke('JoinGroup', id) // entrando no grupo do usuário com id
            .then(() => {
              console.warn('[connection], Joined the group with function');
              callback;
            })
            .catch(() => {
              console.error(
                '[startConnection error], Error Joined the group...',
              );
            });
        })
        .catch(err => {
          console.error('Error while starting connection', err);
        });
    } else if (con?.start) {
      console.warn('tem con');
      return con
        ?.start()
        .then(() => {
          console.warn('Connection started');
          connection
            .invoke('JoinGroup', id) // entrando no grupo do usuário com id
            .then(() => {
              console.warn('[con], Joined the group with function 22222');
              callback;
            })
            .catch(() => {
              console.error('[con error], Error Joined the group...');
            });
        })
        .catch(err => {
          console.error('Error while starting connection', err);
        });
    } else {
      connection = new signalR.HubConnectionBuilder()
        .withUrl(
          `https://omniserversocket.mozaik.cloud/chathub?username=${emailAS}&token=${tokenAS}`,
          {
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets,
          },
        )
        .configureLogging(signalR.LogLevel.Debug)
        .build()
        .start()
        .then(() => {
          console.warn('startouuuu');

          connection
            .invoke('JoinGroup', id) // entrando no grupo do usuário com id
            .then(() => {
              console.warn('Joined the group with function 333333');
              callback;
            })
            .catch(() => {
              console.error('[else error], Error Joined the group...');
            });
        })
        .catch(er => console.error(er));
    }
  };

  const onReceiveMessage = async (name, callback) => {
    try {
      const emailAS = await AsyncStorage.getItem('email');
      const tokenAS = await AsyncStorage.getItem('user');

      if (emailAS && tokenAS) {
        new signalR.HubConnectionBuilder()
          .withUrl(
            `https://omniserversocket.mozaik.cloud/chathub?username=${emailAS}&token=${tokenAS}`,
            {
              skipNegotiation: true,
              transport: signalR.HttpTransportType.WebSockets,
            },
          )
          .configureLogging(signalR.LogLevel.Debug)
          .build()
          .on(name, callback);
        callback();
      }
    } catch (error) {
      console.error('[onReceiveMessage error]', error);
    }
  };

  const connectWsPresence = async () => {
    const tokenAS = await AsyncStorage.getItem('user');

    if (tokenAS) {
      wsPresenceConnection = webSocket({
        url: `${wsPresenceURL}/?token=${tokenAS}`,
      });

      return wsPresenceConnection;
    } else {
      console.log('erro ao pegar token');
    }
  };

  return {
    initSocketConnection,
    startConnection,
    onReceiveMessage,
    connectWsPresence,
    connection,
    wsPresenceConnection,
  };
};
