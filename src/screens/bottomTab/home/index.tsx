import {
  Image,
  StatusBar,
  StyleSheet,
  ViewToken,
  ViewabilityConfig,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useAppTheme } from '@/hooks';
import { Container, Padding, SectionItem } from '@/components';
import { MaterialCommunityIcons, MaterialIcons } from '@/components/icons';
import { SCREEN_HEIGHT } from '@/constants';
import { FlatList } from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { images } from '@/assets';
import SectionBar from './SectionBar';
import Header from './Header';
import { Book, Section } from '@/types';
import { HomeStackScreenProps } from '@/navigators/type';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const INITIAL_POSITION_SECTION_BAR = 94;
const HomeScreen = ({ navigation }: HomeStackScreenProps<'HomeScreen'>) => {
  const insets = useSafeAreaInsets();
  const scrollY = useSharedValue(0);
  const { colors } = useAppTheme();
  const sectionListRef = useRef<FlatList>(null);
  const [selectedSection, setSelectedSection] = useState<number>(0);
  const [debouncedSection, setDebouncedSection] = useState(0);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSection(selectedSection);
    }, 1);

    return () => {
      clearTimeout(handler);
    };
  }, [selectedSection]);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      const offsetY = event.contentOffset.y;
      scrollY.value = offsetY;
    },
  });

  const sectionBarStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [0, 76],
      [0, -INITIAL_POSITION_SECTION_BAR + insets.top],
      Extrapolation.CLAMP,
    );
    return {
      transform: [{ translateY }],
    };
  });

  const onSectionBarPress = useCallback((index: number) => {
    sectionListRef.current?.scrollToIndex({ index: index, viewPosition: 0.5 });
  }, []);

  const onViewableItemsChanged = useRef(
    (info: {
      viewableItems: ViewToken<Section>[];
      changed: ViewToken<Section>[];
    }) => {
      const index = Number(info.viewableItems.at(-1)?.index);

      if (Number.isInteger(index)) {
        setSelectedSection(index);
      }
    },
  );

  const viewabilityConfig = useRef<ViewabilityConfig>({
    itemVisiblePercentThreshold: 100,
  });

  const ItemSeparator = useCallback(() => {
    return <Padding padding={12} />;
  }, []);

  const onBookPress = useCallback(
    (book: Book) => {
      navigation.navigate('DetailBook', { bookId: book.id });
    },
    [navigation],
  );
  return (
    <Container>
      <StatusBar translucent backgroundColor={colors.black} />
      <Animated.View
        style={[
          styles.sectionBar,
          { backgroundColor: colors.black },
          sectionBarStyle,
        ]}>
        <SectionBar
          data={SECTION}
          onSectionBarPress={onSectionBarPress}
          selectedSection={debouncedSection}
        />
      </Animated.View>
      <Animated.FlatList
        ListHeaderComponent={
          <>
            <Header />
            <Image
              source={images.advertisement}
              style={styles.advertisement}
              resizeMode="cover"
            />
            <Padding padding={14} />
          </>
        }
        contentContainerStyle={styles.container}
        onScroll={onScroll}
        ref={sectionListRef}
        ItemSeparatorComponent={ItemSeparator}
        data={SECTION}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig.current}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return <SectionItem item={item} onBookPress={onBookPress} />;
        }}
      />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  advertisement: {
    height: SCREEN_HEIGHT * 0.25,
    width: 'auto',
    marginTop: 90,
    borderRadius: 10,
  },
  sectionBar: {
    position: 'absolute',
    top: INITIAL_POSITION_SECTION_BAR,
    left: 0,
    right: 0,
    paddingBottom: 10,
    paddingTop: 15,
    paddingLeft: 16,
    zIndex: 1,
  },

  sectionBarButton: {
    borderRadius: 20,
    paddingLeft: 44,
  },
  container: {
    padding: 16,
  },
});

export const SECTION: Section[] = [
  {
    id: 'sectionLabel1',
    label: 'Trending',
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
  },
  {
    id: 'sectionLabel2',
    label: '5-Minutes Read',
    icon: (
      <MaterialCommunityIcons
        name="notebook-outline"
        color={'white'}
        size={24}
      />
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
        id: 'book12',
        image: 'https://picsum.photos/700',
        title: 'Title',
        author: 'Author',
        minsRead: 12,
        minsListen: 8,
      },
    ],
  },
  {
    id: 'sectionLabel3',
    label: 'Quick Listen',
    icon: (
      <MaterialCommunityIcons name="headphones" color={'black'} size={24} />
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
        id: 'book55',
        image: 'https://picsum.photos/700',
        title: 'Title',
        author: 'Author',
        minsRead: 12,
        minsListen: 8,
      },
      {
        id: 'book66',
        image: 'https://picsum.photos/700',
        title: 'Title',
        author: 'Author',
        minsRead: 12,
        minsListen: 8,
      },
      {
        id: 'book77',
        image: 'https://picsum.photos/700',
        title: 'Title',
        author: 'Author',
        minsRead: 12,
        minsListen: 8,
      },
      {
        id: 'book88',
        image: 'https://picsum.photos/700',
        title: 'Title',
        author: 'Author',
        minsRead: 12,
        minsListen: 8,
      },
      {
        id: 'book99',
        image: 'https://picsum.photos/700',
        title: 'Title',
        author: 'Author',
        minsRead: 12,
        minsListen: 8,
      },
      {
        id: 'book111',
        image: 'https://picsum.photos/700',
        title: 'Title',
        author: 'Author',
        minsRead: 12,
        minsListen: 8,
      },
    ],
  },
];
