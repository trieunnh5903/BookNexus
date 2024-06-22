import { View } from 'react-native';
import React, { memo, useCallback } from 'react';
import { Section } from './type';
import { useAppTheme } from '@/hooks';
import { Padding } from '@/components';
import { AppText } from '@/components/text';
import { Ionicons } from '@/components/icons';
import { FlatList } from 'react-native-gesture-handler';
import BookHomeVertical from './BookHomeVertical';
import { useNavigation } from '@react-navigation/native';
import { BottomTabScreenProp } from '@/navigators/type';
import { Book } from '@/types';

const SectionItem = ({ item: sectionItem }: { item: Section }) => {
  const navigation = useNavigation<BottomTabScreenProp<'Home'>['navigation']>();
  const { colors } = useAppTheme();
  const ItemSeparator = useCallback(() => {
    return <Padding padding={8} />;
  }, []);

  const onBookPress = useCallback(
    (book: Book) => {
      navigation.navigate('DetailBook', { bookId: book.id });
    },
    [navigation],
  );

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
