import { View } from 'react-native';
import React from 'react';
import { useAppSelector, useAppTheme } from '@/hooks';
import { AppText } from '@/components/text';
import { Pressable } from 'react-native';
import { TITLE_SIZE } from '.';

const BookDescription = () => {
  const { detailBook: book } = useAppSelector(state => state.book);
  const { colors } = useAppTheme();
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <View>
      <AppText fontWeight={'bold'} fontSize={TITLE_SIZE}>
        About this Book
      </AppText>
      <View className="mt-[4]">
        <AppText numberOfLines={isExpanded ? undefined : 4}>
          {book.description}
        </AppText>
        <Pressable onPress={toggleIsExpanded}>
          <AppText fontWeight={'bold'} color={colors.primary}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </AppText>
        </Pressable>
      </View>
    </View>
  );
};

export default React.memo(BookDescription);
