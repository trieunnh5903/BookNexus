import { BottomTabScreenProps as TabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type BottomTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Explore: undefined;
  Library: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  DetailBook: { bookId: string };
};

export type RootStackParamList = {
  Login: undefined;
  RecoverPassword: undefined;
  VerifyCode: undefined;
  SetPassword: undefined;
  Signup: undefined;
  SelectGenres: undefined;
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  StackScreenProps<HomeStackParamList, T>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type BottomTabScreenProp<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    TabScreenProps<BottomTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
