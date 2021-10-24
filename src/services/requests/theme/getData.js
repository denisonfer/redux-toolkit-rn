import axios from 'axios';
import {Alert} from 'react-native';

export default async function requestGetData() {
  try {
    const {data, status} = await axios.get(
      'https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=IX005983155BR',
    );

    if (status === 200) {
      Alert.alert('Sucesso!', 'Dados coletados com sucesso!');
      return data;
    }
  } catch (error) {
    console.tron.log('[REQUEST GET DATA ERROR] =>', error);
    Alert.alert(
      'Erro na requisição',
      `${
        error.response.status === 429
          ? 'Muitas requesições, tente novamente em 5s'
          : error.response.data.message
      }`,
    );
    return false;
  }
}
