import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useAppTheme } from '@/hooks';
import { TextInput } from 'react-native-gesture-handler';
import { AppButtonIcon, AppButtonText } from '@/components/button';
import { GoogleSvg } from '@/assets/icons';

interface LoginEmailProps {
  onNextPress: () => void;
}
const LoginEmail = ({ onNextPress }: LoginEmailProps) => {
  const { colors, fonts } = useAppTheme();
  const [email, setEmail] = useState('');
  return (
    // <BlurView blurType={'light'} overlayColor={'transparent'}>
    <View style={[styles.content]}>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.EmailInput}
            placeholder="Email"
            placeholderTextColor={colors.gray2}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <AppButtonText label="Continue" onPress={onNextPress} />
        <TouchableOpacity>
          <Text style={[styles.forgotPasswordText, { color: colors.primary }]}>
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.orContainer}>
        <View style={styles.divider} />
        <Text style={[styles.textOr, { color: colors.gray2 }, fonts.medium]}>
          Or
        </Text>
        <View style={styles.divider} />
      </View>

      <View>
        <AppButtonIcon
          label="Login with Google"
          iconLeft={<GoogleSvg width={24} height={24} />}
        />
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.dontHaveAccount}>Don't have account?</Text>
        <Text style={[{ color: colors.primary, fontSize: 16 }, fonts.medium]}>
          Sign Up
        </Text>
      </View>
    </View>
    // </BlurView>
  );
};

export default LoginEmail;

const styles = StyleSheet.create({
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
    color: '#000',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
  },

  content: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 32,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },

  container: {
    justifyContent: 'center',
    // alignItems: 'center',
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
