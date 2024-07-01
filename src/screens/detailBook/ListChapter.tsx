import { View } from 'react-native';
import React, { memo, useEffect } from 'react';
import { Padding } from '@/components';
import { AppText } from '@/components/text';
import { FlatList } from 'react-native-gesture-handler';
import { useAppDispatch, useAppSelector, useAppTheme } from '@/hooks';
import { Chapter } from '@/types';
import { Play } from '@/assets/icons';
import { TITLE_SIZE } from './constants';
import { changeNowPlaying } from '@/redux/slices/audioPlayerSlice';
import { MaterialCommunityIcons } from '@/components/icons';
import { AppButtonIcon } from '@/components/button';
import TrackPlayer, { useActiveTrack } from 'react-native-track-player';

const ListChapters = () => {
  const dispatch = useAppDispatch();
  const { nowPlaying } = useAppSelector(state => state.audioPlayer);
  const { book } = useAppSelector(state => state.book);
  const ItemSeprator = React.useCallback(() => <Padding padding={5} />, []);
  const handlePlayAudio = (chapter: Chapter) => {
    dispatch(changeNowPlaying({ chapter }));
  };

  useEffect(() => {
    const preparePlayer = async () => {
      try {
        if (nowPlaying?.audio) {
          await TrackPlayer.reset();
          await TrackPlayer.add([
            {
              url: nowPlaying.audio,
              artwork: book.image,
              artist: book.author,
              title: nowPlaying.title,
              bookName: book.title,
            },
          ]);
          await TrackPlayer.setPlayWhenReady(true);
        }
      } catch (error) {
        console.log('preparePlayer', error);
      }
    };

    preparePlayer();
  }, [nowPlaying, book]);

  return (
    <View>
      <AppText fontSize={TITLE_SIZE} fontWeight={'bold'}>{`${
        book.chapters?.length || 0
      } Chapters`}</AppText>
      <FlatList
        className="mt-[16]"
        data={book.chapters}
        scrollEnabled={false}
        ItemSeparatorComponent={ItemSeprator}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          return (
            <ChapterItem
              index={index}
              item={item}
              onPlayPress={handlePlayAudio}
            />
          );
        }}
      />
    </View>
  );
};

interface ChapterItemProps {
  index: number;
  item: Chapter;
  onPlayPress: (chapter: Chapter) => void;
}
const ChapterItem = memo(({ index, item, onPlayPress }: ChapterItemProps) => {
  const { colors } = useAppTheme();
  const activeTrack = useActiveTrack();
  const iconColor =
    activeTrack?.title === item.title ? colors.bgShade : colors.white;
  const backgroundColor =
    activeTrack?.title === item.title ? colors.primary : colors.bgShade;

  return (
    <View className="flex-1 flex-row">
      <AppText>{index < 10 ? `0${index + 1}` : index + 1}</AppText>
      <View className="ml-[8] flex-1">
        <AppText fontWeight={'bold'}>{item.title}</AppText>
        <AppText fontSize={14} numberOfLines={1}>
          {item.subtitle}
        </AppText>
      </View>
      <View className="flex-row items-center">
        <AppButtonIcon
          icon={
            <MaterialCommunityIcons
              name="glasses"
              color={colors.white}
              size={24}
            />
          }
          backgroundColor={colors.bgShade}
        />
        <Padding padding={4} />
        <AppButtonIcon
          icon={<Play width={24} height={24} color={iconColor} />}
          backgroundColor={backgroundColor}
          onPress={() => onPlayPress(item)}
        />
      </View>
    </View>
  );
});
export default React.memo(ListChapters);
