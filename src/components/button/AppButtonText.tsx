import {
  ColorValue,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAppTheme } from '@/hooks';

interface AppButtonTextProps {
  onPress?: () => void;
  label: string;
  textSize?: number;
  iconLeft?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textColor?: ColorValue;
  backgroundColor?: ColorValue;
  labelStyle?: StyleProp<TextStyle>;
}
const AppButtonText = ({
  onPress,
  backgroundColor,
  iconLeft,
  label,
  textSize,
  style,
  textColor,
  labelStyle,
}: AppButtonTextProps) => {
  const { colors } = useAppTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[
        styles.continueButton,
        { backgroundColor: backgroundColor ?? colors.primary },
        style,
      ]}
      onPress={onPress}>
      {iconLeft && iconLeft}
      <Text
        style={[
          styles.continueButtonText,
          { color: textColor ?? colors.gray4 },
          !!textSize && { fontSize: textSize },
          labelStyle,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(AppButtonText);

const styles = StyleSheet.create({
  continueButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  continueButton: {
    flexDirection: 'row',
    gap: 6,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
