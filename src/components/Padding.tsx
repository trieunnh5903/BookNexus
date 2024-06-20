import { DimensionValue, StyleProp, View, ViewStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';

interface PaddingProps extends PropsWithChildren {
  padding?: DimensionValue | undefined;
  paddingHorizontal?: number;
  paddingVertical?: number;
  paddingLeft?: number;
  paddingBottom?: number;
  paddingEnd?: number;
  paddingTop?: number;
  style?: StyleProp<ViewStyle>;
}
const Padding: React.FC<PaddingProps> = ({
  children,
  padding,
  paddingBottom,
  paddingEnd,
  paddingHorizontal,
  paddingLeft,
  paddingTop,
  paddingVertical,
  style,
}) => {
  return (
    <View
      style={[
        {
          padding,
          paddingHorizontal,
          paddingVertical,
          paddingLeft,
          paddingBottom,
          paddingEnd,
          paddingTop,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default Padding;
