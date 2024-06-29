import { View } from 'react-native';
import React, { memo, useCallback } from 'react';
import { useAppTheme } from '@/hooks';
import { AppText } from '@/components/text';
import { Ionicons } from '@/components/icons';
import { FlatList } from 'react-native-gesture-handler';
import BookHomeVertical from './book/BookHomeVertical';
import { Book, Section } from '@/types';
import Padding from './Padding';

interface SectionItemProps {
  item: Section;
  onBookPress: (book: Book) => void;
}
const SectionItem = ({ item: sectionItem, onBookPress }: SectionItemProps) => {
  const { colors } = useAppTheme();
  const ItemSeparator = useCallback(() => {
    return <Padding padding={8} />;
  }, []);

  return (
    <View className="gap-[16]">
      <View className="flex-row justify-between items-center">
        <AppText fontSize={20} fontWeight={'bold'}>
          {sectionItem.label}
        </AppText>
        <View className="flex-row items-center">
          <AppText fontSize={14} color={colors.primary} fontWeight={'bold'}>
            Show All
          </AppText>
          <Ionicons
            className="ml-1"
            name="chevron-forward-circle"
            color={colors.primary}
            size={16}
          />
        </View>
      </View>
      <FlatList
        horizontal
        ItemSeparatorComponent={ItemSeparator}
        data={sectionItem.data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <BookHomeVertical onPress={() => onBookPress(item)} item={item} />
          );
        }}
      />
    </View>
  );
};

export default memo(SectionItem);
