import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import AppNavigator from '@app/navigator';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO do the initial setup here
  }, [dispatch]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <AppNavigator />
    </>
  );
};

export default App;
