import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAppTheme } from '@/hooks';
import { Container } from '@/components';
import { Path, Svg } from 'react-native-svg';
import { AppText } from '@/components/text';
import { Avatar } from 'react-native-paper';

const HomeScreen = () => {
  const { colors } = useAppTheme();
  return (
    <Container style={styles.container}>
      <StatusBar backgroundColor={colors.black} />
      <View className="flex-row justify-between">
        <View style={{ gap: 4 }}>
          <AppText fontSize={32} fontWeight={'bold'}>
            Good Afternoon
          </AppText>
          <Svg width={68} height={5} viewBox="0 0 68 5" fill="none">
            <Path
              d="M1 1C1 1 25.411 7.75 67 1"
              stroke="#CDE7BE"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </Svg>
        </View>
        <Avatar.Image size={48} source={{ uri: 'https://picsum.photos/300' }} />
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
