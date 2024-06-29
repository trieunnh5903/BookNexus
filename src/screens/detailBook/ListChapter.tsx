import { View } from 'react-native';
import React from 'react';
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

const ListChapters = () => {
  const dispatch = useAppDispatch();
  const { book } = useAppSelector(state => state.book);
  const { colors } = useAppTheme();
  const ItemSeprator = React.useCallback(() => <Padding padding={5} />, []);
  const handlePlayAudio = (chapter: Chapter) => {
    dispatch(changeNowPlaying({ chapter }));
  };
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
                  icon={<Play width={24} height={24} color={colors.white} />}
                  backgroundColor={colors.bgShade}
                  onPress={() => handlePlayAudio(item)}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default React.memo(ListChapters);
