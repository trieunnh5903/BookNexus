import { StyleProp, ViewStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppTheme } from '@/hooks';

interface ContainerProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}
const Container = ({ style, children }: ContainerProps) => {
  const { colors } = useAppTheme();

  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor: colors.black }, style]}>
      {children}
    </SafeAreaView>
  );
};

export default Container;
