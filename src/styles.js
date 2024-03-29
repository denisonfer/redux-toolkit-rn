import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.BACKGROUND};
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.TEXT};
`;
