import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from './type';
import { LoginEmailScreen, LoginPasswordScreen } from '@/screens';

const Stack = createStackNavigator<AuthStackParamList>();
const Authentication = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginPassword"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginEmail" component={LoginEmailScreen} />
      <Stack.Screen name="LoginPassword" component={LoginPasswordScreen} />
    </Stack.Navigator>
  );
};

export default Authentication;
