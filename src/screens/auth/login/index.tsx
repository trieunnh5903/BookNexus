import {
  BackHandler,
  Image,
  Keyboard,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useCallback, useRef } from 'react';
import { images } from '@/assets';
import { useAppTheme } from '@/hooks';
import { Padding } from '@/components';
import LoginPassword from './LoginPassword';
import LoginEmail from './LoginEmail';
import PagerView from 'react-native-pager-view';
import { PagerViewInternal } from 'react-native-pager-view/lib/typescript/PagerView';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { signIn } from '@/redux/slices/authSlice';

const LoginScreen = () => {
  const { fonts } = useAppTheme();
  const dispatch = useDispatch();
  const ref = useRef<PagerViewInternal>(null);
  const activePage = useRef(0);
  const setPage = useCallback((page: number) => ref.current?.setPage(page), []);
  const onCountinuePress = () => {
    setPage(activePage.current + 1);
  };

  const handlerSubmitLogin = useCallback(() => {
    dispatch(signIn({ userToken: 'adaggajlgjlsjjweioe' }));
  }, [dispatch]);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (activePage.current === 0) {
          return false;
        } else {
          setPage(0);
          return true;
        }
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, [setPage]),
  );

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Image
        resizeMode="cover"
        source={images.backgroundAuth}
        style={styles.background}
      />

      <Padding padding={16} style={styles.content}>
        <Text style={[styles.title, fonts.medium]}>Log in</Text>
        <PagerView
          ref={ref}
          onPageSelected={e => {
            activePage.current = e.nativeEvent.position;
          }}
          scrollEnabled={false}
          pageMargin={16}
          useNext
          initialPage={0}>
          <View key="1">
            <LoginEmail onNextPress={onCountinuePress} />
          </View>
          <View key="2">
            <LoginPassword onContinuePress={handlerSubmitLogin} />
          </View>
        </PagerView>
      </Padding>
    </Pressable>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background: { width: '100%', height: '100%', position: 'absolute' },
  dontHaveAccount: { color: '#fff', fontSize: 16 },
  signUpContainer: { flexDirection: 'row', justifyContent: 'center', gap: 6 },
  textOr: {
    fontSize: 18,
  },
  divider: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 1,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  form: {
    gap: 16,
  },
  forgotPasswordText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  EmailInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
  },

  content: { flex: 1, justifyContent: 'center' },

  container: {
    flex: 1,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 20,
  },
});
