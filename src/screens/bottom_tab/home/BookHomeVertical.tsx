import { Image, StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import { Book } from './type';
import { useAppTheme } from '@/hooks';
import { SCREEN_WIDTH } from '@/constants';
import { AppText } from '@/components/text';
import { MaterialCommunityIcons } from '@/components/icons';

const BookHomeVertical = memo(({ item }: { item: Book }) => {
  const { colors } = useAppTheme();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.image }}
        style={{ width: SCREEN_WIDTH * 0.33, aspectRatio: 128 / 184 }}
      />
      <View>
        <AppText fontSize={14} fontWeight={'bold'}>
          {item.title}
        </AppText>
        <AppText fontSize={12}>{item.author}</AppText>
      </View>

      <View className="flex-row gap-4">
        <View className="flex-row items-center">
          <MaterialCommunityIcons
            className="mr-1"
            name="headphones"
            color={colors.gray1}
            size={14}
          />
          <AppText fontSize={12} color={colors.gray1}>
            {item.minsListen}m
          </AppText>
        </View>

        <View className="flex-row items-center">
          <MaterialCommunityIcons
            className="mr-1"
            name="glasses"
            color={colors.gray1}
            size={14}
          />
          <AppText fontSize={12} color={colors.gray1}>
            {item.minsRead}m
          </AppText>
        </View>
      </View>
    </View>
  );
});

export default BookHomeVertical;

const styles = StyleSheet.create({
  container: { gap: 8 },
});
