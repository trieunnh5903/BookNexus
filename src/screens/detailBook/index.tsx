import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import { useAppSelector, useAppTheme } from '@/hooks';
import { Container, SectionItem } from '@/components';
import { AppText } from '@/components/text';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants';
import { AppButtonIcon } from '@/components/button';
import { MaterialCommunityIcons, MaterialIcons } from '@/components/icons';
import { Chip, IconButton } from 'react-native-paper';
import { Book } from '@/types';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { HomeStackScreenProps } from '@/navigators/type';
import BookDescription from './BookDescription';
import ListChapters from './ListChapter';
import NowPlaying from './NowPlaying';
import { BlurView } from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const TITLE_SIZE = 20;
const HEADER_HEIGHT = 60;
const IMAGE_BG_HEIGHT = SCREEN_HEIGHT * 0.35;

const DetailBook = ({ navigation }: HomeStackScreenProps<'DetailBook'>) => {
  const insets = useSafeAreaInsets();
  const offsetY = useSharedValue(0);
  const { detailBook: book, nowPlaying } = useAppSelector(state => state.book);
  const { colors } = useAppTheme();
  const onSimilarBookPress = (_similarBook: Book) => {};
  const onScroll = useAnimatedScrollHandler({
    onScroll: e => {
      offsetY.value = e.contentOffset.y;
    },
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        offsetY.value,
        [SCREEN_HEIGHT * 0.4, SCREEN_HEIGHT * 0.5],
        [0, 1],
      ),
    };
  });

  return (
    <Container>
      <Animated.ScrollView onScroll={onScroll}>
        <ImageBackground
          source={{ uri: book.image }}
          blurRadius={4}
          style={styles.imageBackground}>
          <LinearGradient
            colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,1)']}
            style={{ height: 20, width: SCREEN_WIDTH }}
          />
        </ImageBackground>
        {Platform.OS === 'android' && (
          <View
            style={[styles.imageBackground, styles.imageBackgroundOverlay]}
          />
        )}
        {Platform.OS === 'ios' && (
          <View style={[styles.blur]}>
            <BlurView
              style={StyleSheet.absoluteFill}
              blurType="dark"
              blurAmount={10}
            />
          </View>
        )}

        <View style={[styles.imageBackground, styles.imageBookWrapper]}>
          <Image source={{ uri: book.image }} style={styles.book} />
          <View
            style={[
              styles.readBook,
              {
                backgroundColor: colors.bgShade,
              },
            ]}>
            <View>
              <AppButtonIcon
                label="Read Now"
                textColor={colors.white}
                backgroundColor={'transparent'}
                iconLeft={
                  <MaterialCommunityIcons
                    name="book-open-outline"
                    size={24}
                    color={colors.white}
                  />
                }
              />
            </View>
            <View className="flex-1 justify-center">
              <View
                style={[
                  {
                    borderColor: colors.gray1,
                  },
                  styles.divider,
                ]}
              />
            </View>

            <View>
              <AppButtonIcon
                label="Listen Now"
                textColor={colors.white}
                backgroundColor={'transparent'}
                iconLeft={
                  <MaterialCommunityIcons
                    name="headphones"
                    size={24}
                    color={colors.white}
                  />
                }
              />
            </View>
          </View>
        </View>
        <View className="p-[16] mt-[32]" style={{ gap: 24 }}>
          <View>
            <AppText fontWeight={'bold'} fontSize={TITLE_SIZE + 2}>
              {book.title}
            </AppText>
            <AppText fontWeight={'bold'} fontSize={16}>
              {book.author}
            </AppText>
          </View>
          <View>
            <BookDescription />
            <View className="flex-row flex-wrap gap-[10] mt-[6]">
              {book.genre?.map(item => {
                return (
                  <Chip style={styles.chip} key={item.id}>
                    {item.name}
                  </Chip>
                );
              })}
            </View>
          </View>
          <ListChapters />
          <SectionItem item={SimilarBook} onBookPress={onSimilarBookPress} />
        </View>
      </Animated.ScrollView>
      <Animated.View
        style={[
          styles.header,
          { top: insets.top, backgroundColor: colors.black },
          headerAnimatedStyle,
        ]}>
        <AppText fontSize={20} fontWeight={'bold'}>
          {book.title}
        </AppText>
      </Animated.View>
      <View style={[styles.back, { top: insets.top }]}>
        <IconButton
          onPress={() => navigation.goBack()}
          icon={'arrow-left'}
          size={24}
          containerColor={colors.black}
        />
      </View>
      {nowPlaying && <NowPlaying />}
    </Container>
  );
};

export default DetailBook;

const styles = StyleSheet.create({
  blur: {
    position: 'absolute',
    width: '100%',
    height: IMAGE_BG_HEIGHT + 40,
    top: 0,
  },
  imageBackgroundOverlay: {
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.4,
    flexDirection: 'row',
  },
  back: {
    position: 'absolute',
    height: HEADER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: HEADER_HEIGHT,
    width: SCREEN_WIDTH,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    borderWidth: 1,
    height: '60%',
    alignSelf: 'center',
    // marginHorizontal: 20,
  },
  chip: { borderRadius: 8 },
  readBook: {
    position: 'absolute',
    borderRadius: 16,
    flexDirection: 'row',
    bottom: -30,
    paddingVertical: 6,
    paddingHorizontal: 16,
    left: 16,
    right: 16,
  },

  imageBackground: {
    width: SCREEN_WIDTH,
    height: IMAGE_BG_HEIGHT,
    justifyContent: 'flex-end',
  },
  imageBookWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'absolute',
  },
  book: {
    width: '36%',
    aspectRatio: 2 / 3,
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
    height: SCREEN_HEIGHT * 0.4,
  },

  image: {
    width: 200,
    height: 300, // Adjust to fit your image
    resizeMode: 'contain',
  },
});

const SimilarBook = {
  id: 'sectionLabel12',
  label: 'Similar Book',
  icon: (
    <MaterialIcons name="local-fire-department" color={'white'} size={24} />
  ),
  data: [
    {
      id: 'book1',
      image: 'https://picsum.photos/700',
      title: 'Title',
      author: 'Author',
      minsRead: 12,
      minsListen: 8,
    },
    {
      id: 'book2',
      image: 'https://picsum.photos/700',
      title: 'Title',
      author: 'Author',
      minsRead: 12,
      minsListen: 8,
    },
    {
      id: 'book3',
      image: 'https://picsum.photos/700',
      title: 'Title',
      author: 'Author',
      minsRead: 12,
      minsListen: 8,
    },
    {
      id: 'book4',
      image: 'https://picsum.photos/700',
      title: 'Title',
      author: 'Author',
      minsRead: 12,
      minsListen: 8,
    },
    {
      id: 'book5',
      image: 'https://picsum.photos/700',
      title: 'Title',
      author: 'Author',
      minsRead: 12,
      minsListen: 8,
    },
    {
      id: 'book6',
      image: 'https://picsum.photos/700',
      title: 'Title',
      author: 'Author',
      minsRead: 12,
      minsListen: 8,
    },
    {
      id: 'book7',
      image: 'https://picsum.photos/700',
      title: 'Title',
      author: 'Author',
      minsRead: 12,
      minsListen: 8,
    },
    {
      id: 'book8',
      image: 'https://picsum.photos/700',
      title: 'Title',
      author: 'Author',
      minsRead: 12,
      minsListen: 8,
    },
    {
      id: 'book9',
      image: 'https://picsum.photos/700',
      title: 'Title',
      author: 'Author',
      minsRead: 12,
      minsListen: 8,
    },
    {
      id: 'book11',
      image: 'https://picsum.photos/700',
      title: 'Title',
      author: 'Author',
      minsRead: 12,
      minsListen: 8,
    },
  ],
};
