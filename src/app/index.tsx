import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppNavigator from '@app/navigator';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO do the initial setup here for login
  }, [dispatch]);

  return <AppNavigator />;
};

export default App;
