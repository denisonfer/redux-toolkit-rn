import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import sagaActions from '../../store/sagaActions';

import {updateThemeToDark, updateThemeToLight} from '../../store/slices/theme';

import {Container, Square} from './styles';

const Switch = () => {
  const dispatch = useDispatch();
  const {currentTheme} = useSelector(state => state.theme);

  const [isActive, setIsActive] = useState(false);

  const handleSwitchTheme = useCallback(() => {
    if (currentTheme.name === 'light') {
      dispatch({type: sagaActions.theme.REQUEST_API});
      dispatch(updateThemeToDark());
      setIsActive(true);
    } else {
      dispatch({type: sagaActions.theme.REQUEST_API});
      dispatch(updateThemeToLight());
      setIsActive(false);
    }
  }, [currentTheme, dispatch]);

  return (
    <Container onPress={handleSwitchTheme} isActive={isActive}>
      <Square />
    </Container>
  );
};

export default Switch;
