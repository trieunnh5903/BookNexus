import { ColorValue, Text, TextProps, TextStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { StyleProp } from 'react-native';

interface AppTextProps extends TextProps, PropsWithChildren {
  color?: ColorValue;
  fontSize?: number;
  fontWeight?: 'bold' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  style?: StyleProp<TextStyle>;
  lineHeight?: number;
  letterSpacing?: number;
}
const AppText = ({
  color = '#fff',
  fontSize = 16,
  fontWeight,
  children,
  letterSpacing,
  lineHeight,
  style,
  ...props
}: AppTextProps) => {
  return (
    <Text
      style={[
        {
          color: color,
          fontSize: fontSize,
          fontWeight: fontWeight,
          lineHeight: lineHeight,
          letterSpacing: letterSpacing,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default AppText;
