import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { theme } from '@/hooks';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { ApplicationNavigator } from '@/navigators';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <ApplicationNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
