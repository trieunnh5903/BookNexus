import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Authentication } from '@/navigators';
import { PaperProvider } from 'react-native-paper';
import { theme } from '@/hooks';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Authentication />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
