import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import { ColorValue } from 'react-native';
import { TouchableOpacity } from 'react-native';

interface AppButtonIconProps {
  onPress?: () => void;
  icon?: React.JSX.Element;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: ColorValue;
}
const AppButtonIcon = ({
  icon,
  onPress,
  backgroundColor,
  style,
}: AppButtonIconProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor,
        },
        style,
      ]}
      onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 6,
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AppButtonIcon;
