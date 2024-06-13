import { ColorValue, StyleSheet, Text, TextProps, View } from 'react-native';
import React, { PropsWithChildren } from 'react';

interface AppTextProps extends TextProps, PropsWithChildren {
  color?: ColorValue;
  fontSize?: number;
  fontWeight?: 'bold' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}
const AppText = ({
  color = '#fff',
  fontSize = 16,
  fontWeight,
  children,
  ...props
}: AppTextProps) => {
  return (
    <Text
      style={{ color: color, fontSize: fontSize, fontWeight: fontWeight }}
      {...props}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({});
