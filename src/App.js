import React from 'react';
import {useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import Switch from './components/Switch';
import Websocket from './components/Websocket';

import {Container, Text} from './styles';

const App = () => {
  const theme = useSelector(state => state.theme.currentTheme);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Text> DARK MODE</Text>
        <Switch />
        <Websocket />
      </Container>
    </ThemeProvider>
  );
};

export default App;
