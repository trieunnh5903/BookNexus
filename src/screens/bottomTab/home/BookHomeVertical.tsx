import { Image, StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import { useAppTheme } from '@/hooks';
import { SCREEN_WIDTH } from '@/constants';
import { AppText } from '@/components/text';
import { MaterialCommunityIcons } from '@/components/icons';
import { Book } from '@/types';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BookHomeVertical = memo(
  ({ item, onPress }: { item: Book; onPress?: () => void }) => {
    const { colors } = useAppTheme();
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
        style={styles.container}>
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
      </TouchableOpacity>
    );
  },
);

export default BookHomeVertical;

const styles = StyleSheet.create({
  container: { gap: 8 },
});
