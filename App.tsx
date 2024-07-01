import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { theme } from '@/hooks';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { ApplicationNavigator } from '@/navigators';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TrackPlayer from 'react-native-track-player';

const App = () => {
  React.useEffect(() => {
    const setUpPlayer = async () => {
      try {
        await TrackPlayer.setupPlayer();
      } catch (error) {
        console.log('setUpPlayer', error);
      }
    };

    setUpPlayer();
    return () => {};
  }, []);

  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <ApplicationNavigator />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
