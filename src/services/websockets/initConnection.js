import {HttpTransportType, HubConnectionBuilder} from '@microsoft/signalr';
import configs from '../../../configs';

export function initConnection({connectionRef}) {
  const emailAS = 'denison.menezes@code7.com';
  const user_id = '615dec50459f5b00014eb311';
  const tokenAS = configs.token;

  const connection = new HubConnectionBuilder()
    .withUrl(
      `https://omniserversocket.mozaik.cloud/chathub?username=${emailAS}&token=${tokenAS}`,
      {
        transport: HttpTransportType.WebSockets,
        skipNegotiation: true,
      },
    )
    .build();

  if (connection) {
    connectionRef = connection.start().then(() => {
      console.tron.log('START CONNECTION WEBSOCKET');
      connection.invoke('joinGroup', user_id).then(() => {
        console.tron.log('JOINED GROUP WITH USER ID');
      });
    });
    return {connection, connectionRef};
  }
}
