import React, { useCallback } from 'react';
import { useAppSelector, useAppTheme } from '@/hooks';
import BottomTab from './BottomTab';
import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';
import { RootStackParamList } from './type';
import { LoginScreen } from '@/screens';
import { StyleSheet, View } from 'react-native';
import AudioPlayer from '@/screens/audioPlayer';

const Stack = createStackNavigator<RootStackParamList>();
const ApplicationNavigator = () => {
  const userToken = useAppSelector(state => state.auth.userToken);
  const { colors } = useAppTheme();
  const cardOverlay = useCallback(
    () => <View style={[{ backgroundColor: colors.black }, styles.overlay]} />,
    [colors.black],
  );
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalFadeTransition,
        cardOverlayEnabled: true,
        cardOverlay: cardOverlay,
      }}>
      {!userToken ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      ) : (
        <>
          <Stack.Screen component={BottomTab} name="BottomTab" />
          <Stack.Screen
            component={AudioPlayer}
            name="AudioPlayer"
            options={{
              ...TransitionPresets.ModalSlideFromBottomIOS,
              gestureEnabled: true,
              gestureDirection: 'vertical',
              cardOverlayEnabled: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({ overlay: { flex: 1 } });
export default ApplicationNavigator;
