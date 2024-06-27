import { Image, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackScreenProps } from '@/navigators/type';
import { useAppSelector, useAppTheme } from '@/hooks';
import Animated, { FadeIn } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { SCREEN_WIDTH } from '@/constants';
import { AudioWave, Foward, Play } from '@/assets/icons';
import { AppText } from '@/components/text';
import { TouchableRipple } from 'react-native-paper';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const NowPlaying = () => {
  const navigation =
    useNavigation<HomeStackScreenProps<'DetailBook'>['navigation']>();
  const { detailBook: book, nowPlaying } = useAppSelector(state => state.book);
  const { colors } = useAppTheme();
  const handleNowPlayingPress = () => {
    navigation.navigate('AudioPlayer');
  };
  return (
    <AnimatedPressable
      onPress={handleNowPlayingPress}
      entering={FadeIn}
      className={'px-[16] py-[10] flex-row gap-[12]'}>
      <LinearGradient
        colors={['#20211C', '#181819']}
        locations={[0.5, 1]}
        style={StyleSheet.absoluteFill}
      />
      <Image
        source={{ uri: book.image }}
        style={{ aspectRatio: 38 / 54 }}
        width={0.11 * SCREEN_WIDTH}
      />
      <View className="justify-center flex-1">
        <View className="flex-row">
          <AudioWave
            className="mr-[10]"
            width={24}
            height={24}
            color={colors.primary}
          />
          <AppText fontWeight={'bold'} color={colors.primary}>
            Now playing
          </AppText>
        </View>
        <AppText>
          {book.title} - {nowPlaying?.title}
        </AppText>
      </View>
      <View className="flex-row items-center gap-[8]">
        <TouchableRipple
          onPress={() => {
            console.log('TouchableRipple');
          }}
          rippleColor={colors.white}
          style={[
            { backgroundColor: colors.primary },
            styles.nowPlayingButton,
          ]}>
          <Play color={colors.bgBlue} width={24} height={24} />
        </TouchableRipple>

        <Pressable
          onPress={() => {
            console.log('Pressable');
          }}
          style={[
            { backgroundColor: colors.primary },
            styles.nowPlayingButton,
          ]}>
          <Foward color={colors.bgBlue} width={24} height={24} />
        </Pressable>
      </View>
    </AnimatedPressable>
  );
};

export default React.memo(NowPlaying);

const styles = StyleSheet.create({
  nowPlayingButton: {
    padding: 6,
    borderRadius: 24,
  },
});
