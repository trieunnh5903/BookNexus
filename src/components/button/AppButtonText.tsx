import { StyleSheet, Text } from 'react-native';
import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAppTheme } from '@/hooks';

interface AppButtonTextProps {
  onPress?: () => void;
  label: string;
  textSize?: number;
}
const AppButtonText = ({ onPress, label, textSize }: AppButtonTextProps) => {
  const { colors } = useAppTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.continueButton, { backgroundColor: colors.primary }]}
      onPress={onPress}>
      <Text
        style={[
          styles.continueButtonText,
          { color: colors.gray4 },
          !!textSize && { fontSize: textSize },
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
  },
  continueButton: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
});
