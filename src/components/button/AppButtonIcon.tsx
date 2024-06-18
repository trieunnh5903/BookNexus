import {
  ColorValue,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAppTheme } from '@/hooks';

interface AppButtonIconProps {
  onPress?: () => void;
  label: string;
  textSize?: number;
  iconLeft?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textColor?: ColorValue;
}
const AppButtonIcon = ({
  iconLeft,
  label,
  onPress,
  textSize,
  textColor,
  style,
}: AppButtonIconProps) => {
  const { colors } = useAppTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.continueButton, { backgroundColor: colors.white }, style]}
      onPress={onPress}>
      <View style={styles.iconLeft}>{iconLeft}</View>
      <Text
        style={[
          styles.continueButtonText,
          { color: textColor || colors.gray4 },
          !!textSize && { fontSize: textSize },
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButtonIcon;

const styles = StyleSheet.create({
  iconLeft: {
    position: 'absolute',
    left: 16,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  continueButton: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
