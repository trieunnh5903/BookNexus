import {
  Alert,
  Image,
  Keyboard,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { AppButtonText, Ionicons } from '@/components';
import { useAppTheme } from '@/hooks';
import { images } from '@/assets';
import { BlurView } from '@react-native-community/blur';

const LoginPassword = () => {
  const { fonts } = useAppTheme();

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'light-content'}
        animated
      />

      <Image
        resizeMode="cover"
        source={images.backgroundAuth}
        style={styles.background}
      />
      <Text style={[styles.title, fonts.medium]}>Log in</Text>

      <FormInput />
    </Pressable>
  );
};

const FormInput = () => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { colors } = useAppTheme();
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = () => {
    // Add login logic here
    Alert.alert('Logged in', 'Welcome back, John Doe!');
  };

  const handleForgotPassword = () => {
    // Add forgot password logic here
    Alert.alert('Forgot Password', 'Password reset link sent to your email.');
  };
  return (
    <BlurView blurType={'light'} overlayColor={'transparent'}>
      <View style={[styles.content]}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://picsum.photos/300' }}
            style={styles.profileImage}
          />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={[styles.profileEmail, { color: colors.gray1 }]}>
              john.doe@example.com
            </Text>
          </View>
          <Ionicons
            name="checkmark-circle-outline"
            size={24}
            color={colors.primary}
            style={styles.checkmarkIcon}
          />
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              placeholderTextColor={colors.gray2}
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.eyeIcon}>
              <Ionicons
                name={isPasswordVisible ? 'eye-off' : 'eye'}
                size={24}
                color={colors.gray2}
              />
            </TouchableOpacity>
          </View>
          <AppButtonText label="Continue" onPress={handleLogin} />
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text
              style={[styles.forgotPasswordText, { color: colors.primary }]}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </BlurView>
  );
};

export default LoginPassword;

const styles = StyleSheet.create({
  form: {
    gap: 16,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 20,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 24,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginRight: 15,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileEmail: {
    color: '#ccc',
    fontSize: 14,
  },
  checkmarkIcon: {
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  passwordInput: {
    flex: 1,
    color: '#fff',
  },
  eyeIcon: {
    marginHorizontal: 6,
  },
  continueButton: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
