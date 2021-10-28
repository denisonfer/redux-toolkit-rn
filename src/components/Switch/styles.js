import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  align-items: ${({isActive}) => (isActive ? 'flex-end' : 'flex-start')};
  padding: 2px 4px;
  width: 15%;
  background-color: ${({isActive}) => (isActive ? 'green' : 'gainsboro')};
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Square = styled.View`
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 4px;
`;
