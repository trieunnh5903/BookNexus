import { BottomTabScreenProps as TabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type BottomTabParamList = {
  Home: undefined;
  Explore: undefined;
  Library: undefined;
};

export type RootStackParamList = {
  Login: undefined;
  RecoverPassword: undefined;
  VerifyCode: undefined;
  SetPassword: undefined;
  Signup: undefined;
  SelectGenres: undefined;
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
  DetailBook: { bookId: string };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type BottomTabScreenProp<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    TabScreenProps<BottomTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
