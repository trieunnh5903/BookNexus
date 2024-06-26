import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import React, { useCallback, useMemo } from 'react';
import { Container, Padding } from '@/components';
import { useAppTheme } from '@/hooks';
import { RootStackScreenProps } from '@/navigators/type';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants';
import LinearGradient from 'react-native-linear-gradient';
import { AppText } from '@/components/text';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {
  Moon,
  Pause,
  Play,
  SkipFoward,
  SkipFoward10s,
  SkipNext,
  SkipNext10s,
} from '@/assets/icons';
import { AppButtonIcon } from '@/components/button';
import { MaterialCommunityIcons } from '@/components/icons';
import TrackPlayer, {
  useActiveTrack,
  useIsPlaying,
  useProgress,
} from 'react-native-track-player';
import moment from 'moment';

const AudioPlayer = ({ navigation }: RootStackScreenProps<'AudioPlayer'>) => {
  // const { nowPlaying } = useAppSelector(state => state.audioPlayer);
  // const { book } = useAppSelector(state => state.book);
  const { colors } = useAppTheme();
  const { bufferingDuringPlay, playing } = useIsPlaying();
  const activeTrack = useActiveTrack();
  const { position, duration } = useProgress();
  const onSliderChange = useCallback(async (values: number[]) => {
    try {
      TrackPlayer.seekTo(values[0]);
    } catch (error) {
      console.log('onSliderChange', error);
    }
  }, []);

  const icon = useMemo(
    () =>
      bufferingDuringPlay ? (
        <ActivityIndicator size={40} color={colors.bgBlue} />
      ) : playing === false ? (
        <Play color={colors.bgBlue} width={40} height={40} />
      ) : (
        <Pause color={colors.bgBlue} width={40} height={40} />
      ),
    [bufferingDuringPlay, colors.bgBlue, playing],
  );

  const currentTime = moment.utc(position * 1000).format('mm:ss');
  const remainingTime = moment
    .utc((duration - position) * 1000)
    .format('mm:ss');

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

  const handleFoward10second = () => {
    try {
      TrackPlayer.seekTo(position - 10);
    } catch (error) {}
  };

  const handleNext10Second = () => {
    try {
      TrackPlayer.seekTo(position + 10);
    } catch (error) {}
  };

  return (
    <Container>
      <AppButtonIcon
        onPress={() => navigation.goBack()}
        style={styles.back}
        icon={
          <MaterialCommunityIcons
            name={'chevron-down'}
            size={32}
            color={colors.white}
          />
        }
      />
      {true && (
        <ImageBackground
          blurRadius={4}
          source={{ uri: activeTrack?.artwork }}
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT * 0.5,
          }}>
          <LinearGradient
            colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.1)']}
            style={styles.linearGradient}
          />
          <View className="flex-1" />
          <LinearGradient
            colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,1)']}
            style={styles.linearGradient}
          />
          <View style={[styles.imageBackgroundOverlay]} />
          <Image source={{ uri: activeTrack?.artwork }} style={styles.image} />
        </ImageBackground>
      )}

      <View className="p-[16]">
        <View>
          <AppText fontWeight={'bold'} fontSize={20}>
            {activeTrack?.title}
          </AppText>
          <AppText fontWeight={'bold'} fontSize={18}>
            {activeTrack?.bookName}
          </AppText>
          <AppText fontSize={16}>{activeTrack?.artist}</AppText>
        </View>

        <View style={styles.mediaPlayer}>
          <MultiSlider
            max={duration}
            step={duration / 100}
            values={[position]}
            onValuesChangeFinish={onSliderChange}
            containerStyle={styles.slider}
            sliderLength={SCREEN_WIDTH - 32}
            selectedStyle={{ backgroundColor: colors.white }}
            markerContainerStyle={{
              transform: [{ translateY: 3 }],
            }}
            markerStyle={{ backgroundColor: colors.white }}
            trackStyle={[styles.track, { backgroundColor: colors.bgShade }]}
          />
          <View className="flex-row justify-between">
            <AppText letterSpacing={0.5}>{currentTime}</AppText>
            <AppText letterSpacing={0.5}>-{remainingTime}</AppText>
          </View>

          <View className="flex-row items-center">
            <AppButtonIcon
              icon={<SkipFoward width={24} height={24} color={colors.white} />}
            />

            <View className="flex-1 flex-row justify-center items-center">
              <AppButtonIcon
                onPress={handleFoward10second}
                icon={
                  <SkipFoward10s width={24} height={24} color={colors.white} />
                }
              />
              <Padding padding={10} />
              <AppButtonIcon
                onPress={handlePlay}
                backgroundColor={colors.primary}
                style={styles.iconPlay}
                icon={icon}
              />
              <Padding padding={10} />
              <AppButtonIcon
                onPress={handleNext10Second}
                icon={
                  <SkipNext10s width={24} height={24} color={colors.white} />
                }
              />
            </View>

            <AppButtonIcon
              icon={<SkipNext width={24} height={24} color={colors.white} />}
            />
          </View>

          <View className="flex-row justify-between items-center">
            <AppButtonIcon
              icon={<Moon width={24} height={24} fill={colors.white} />}
            />
            <AppText fontWeight={'bold'} letterSpacing={0.5}>
              1.0x
            </AppText>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default AudioPlayer;

const styles = StyleSheet.create({
  back: { alignSelf: 'flex-start' },
  slider: { height: 'auto' },
  iconPlay: { padding: 10 },
  mediaPlayer: { gap: 6, marginTop: 30 },
  track: {
    height: 6,
    borderRadius: 4,
  },
  image: {
    width: SCREEN_WIDTH * 0.4,
    aspectRatio: 173 / 249,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      { translateX: -((SCREEN_WIDTH * 0.4) / 2) },
      { translateY: -((SCREEN_WIDTH * 0.4) / (173 / 249) / 2) },
    ],
  },
  linearGradient: {
    height: 10,
  },
  imageBackgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: 0.5,
    flexDirection: 'row',
  },
});
