import {
  Image,
  StatusBar,
  StyleSheet,
  ViewToken,
  ViewabilityConfig,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useAppTheme } from '@/hooks';
import { Container, Padding } from '@/components';
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
import { Section } from './type';
import SectionItem from './SectionItem';
import SectionBar from './SectionBar';
import Header from './Header';

const HomeScreen = () => {
  const scrollY = useSharedValue(0);
  const { colors } = useAppTheme();
  const sectionListRef = useRef<FlatList>(null);
  const sectionBarRef = useRef<FlatList>(null);
  const [selectedSection, setSelectedSection] = useState<number>(0);
  const [debouncedSection, setDebouncedSection] = useState(0);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSection(selectedSection);
      sectionBarRef.current?.scrollToIndex({
        index: selectedSection,
        viewPosition: 0.5,
      });
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
      [0, 75],
      [0, -75],
      Extrapolation.CLAMP,
    );
    return {
      transform: [{ translateY }],
    };
  });

  const onSectionBarPress = useCallback((index: number) => {
    sectionListRef.current?.scrollToIndex({ index: index, viewPosition: 0.5 });
  }, []);

  console.log('selectedSection', selectedSection);

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

  return (
    <Container>
      <StatusBar backgroundColor={colors.black} />
      <Animated.FlatList
        ListHeaderComponent={
          <>
            <Header />
            <Image
              source={images.advertisement}
              style={styles.advertisement}
              resizeMode="cover"
            />
            <Padding padding={16} />
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
          return <SectionItem item={item} />;
        }}
      />
      <Animated.View
        style={[
          styles.sectionBar,
          { backgroundColor: colors.black },
          sectionBarStyle,
        ]}>
        <SectionBar
          onSectionBarPress={onSectionBarPress}
          selectedSection={debouncedSection}
        />
      </Animated.View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  advertisement: {
    height: SCREEN_HEIGHT * 0.25,
    width: 'auto',
    marginTop: 82,
    borderRadius: 10,
  },
  sectionBar: {
    position: 'absolute',
    top: 70,
    paddingVertical: 10,
    paddingTop: 15,
    left: 16,
    right: 0,
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
