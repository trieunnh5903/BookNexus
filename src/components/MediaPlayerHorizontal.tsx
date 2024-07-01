import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import { useAppTheme } from '@/hooks';
import Animated, { FadeIn } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { SCREEN_WIDTH } from '@/constants';
import { AudioWave, Foward, Pause, Play } from '@/assets/icons';
import { AppText } from '@/components/text';
import TrackPlayer, {
  useActiveTrack,
  useIsPlaying,
} from 'react-native-track-player';
import { AppButtonIcon } from '@/components/button';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const MediaPlayerHorizontal = () => {
  const { bufferingDuringPlay, playing } = useIsPlaying();
  // const { book } = useAppSelector(state => state.book);
  const activeTrack = useActiveTrack();
  // const { nowPlaying } = useAppSelector(state => state.audioPlayer);
  const { colors } = useAppTheme();
  // const handleNowPlayingPress = () => {
  //   navigation.navigate('AudioPlayer');
  // };

  const handlePlay = async () => {
    if (bufferingDuringPlay) {
      return;
    }
    if (playing) {
      TrackPlayer.pause();
    } else if (playing === false) {
      TrackPlayer.play();
    }
  };

  const icon = React.useMemo(
    () =>
      bufferingDuringPlay ? (
        <ActivityIndicator size={24} color={colors.bgBlue} />
      ) : playing === false ? (
        <Play color={colors.bgBlue} width={24} height={24} />
      ) : (
        <Pause color={colors.bgBlue} width={24} height={24} />
      ),
    [bufferingDuringPlay, colors.bgBlue, playing],
  );

  if (!activeTrack) {
    return;
  }

  return (
    <AnimatedPressable
      // onPress={handleNowPlayingPress}
      entering={FadeIn}
      style={styles.container}>
      <LinearGradient
        colors={['#20211C', '#181819']}
        locations={[0.5, 1]}
        style={[StyleSheet.absoluteFill, styles.gradient]}
      />
      <Image
        source={{ uri: activeTrack?.artwork }}
        style={{ aspectRatio: 1 }}
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
            {bufferingDuringPlay
              ? 'Buffering'
              : playing
              ? 'Now playing'
              : 'Continue Listening'}
          </AppText>
        </View>
        <AppText>
          {activeTrack.title} - {activeTrack.bookName}
        </AppText>
      </View>
      <View className="flex-row items-center gap-[8]">
        <AppButtonIcon
          icon={icon}
          onPress={handlePlay}
          style={[{ backgroundColor: colors.primary }, styles.nowPlayingButton]}
        />

        <AppButtonIcon
          icon={<Foward color={colors.bgBlue} width={24} height={24} />}
          onPress={() => {
            console.log('Pressable');
          }}
          style={[{ backgroundColor: colors.primary }, styles.nowPlayingButton]}
        />
      </View>
    </AnimatedPressable>
  );
};

export default React.memo(MediaPlayerHorizontal);

const styles = StyleSheet.create({
  gradient: { borderRadius: 10 },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    gap: 12,
  },
  nowPlayingButton: {
    padding: 6,
    borderRadius: 24,
  },
});
