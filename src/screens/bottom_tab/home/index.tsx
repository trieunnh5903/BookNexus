import { Image, StatusBar, StyleSheet, View } from 'react-native';
import React, { forwardRef, memo, useMemo, useRef, useState } from 'react';
import { useAppTheme } from '@/hooks';
import { Container, Padding } from '@/components';
import { Path, Svg } from 'react-native-svg';
import { AppText } from '@/components/text';
import { Avatar } from 'react-native-paper';
import { AppButtonIcon } from '@/components/button';
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@/components/icons';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants';
import { FlatList } from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { images } from '@/assets';

const HomeScreen = () => {
  const scrollY = useSharedValue(0);
  const { colors } = useAppTheme();
  const sectionListRef = useRef<FlatList>(null);
  const sectionBarRef = useRef<FlatList>(null);
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
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

  const onSectionBarPress = (index: number) => {
    sectionListRef.current?.scrollToIndex({ index: index, viewPosition: 0.5 });
    sectionBarRef.current?.scrollToIndex({ index: index, viewPosition: 0.5 });
  };

  return (
    <Container>
      <StatusBar backgroundColor={colors.black} />
      <Animated.FlatList
        ListHeaderComponent={
          <>
            <View className="flex-row justify-between">
              <View style={{ gap: 4 }}>
                <AppText fontSize={32} fontWeight={'bold'}>
                  Good Afternoon
                </AppText>
                <Svg width={68} height={5} viewBox="0 0 68 5" fill="none">
                  <Path
                    d="M1 1C1 1 25.411 7.75 67 1"
                    stroke={colors.primary}
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </Svg>
              </View>
              <Avatar.Image
                size={48}
                source={{ uri: 'https://picsum.photos/300' }}
              />
            </View>
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
        ItemSeparatorComponent={() => <Padding padding={12} />}
        data={SECTION}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return <Section item={item} />;
        }}
      />
      <Animated.View
        style={[
          styles.sectionBar,
          { backgroundColor: colors.black },
          sectionBarStyle,
        ]}>
        <SectionBar ref={sectionBarRef} onSectionBarPress={onSectionBarPress} />
      </Animated.View>
    </Container>
  );
};

type Section = {
  id: string;
  label: string;
  icon: React.JSX.Element;
  data: Book[];
};
const SECTION: Section[] = [
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

const Section = ({ item: sectionItem }: { item: (typeof SECTION)[0] }) => {
  const { colors } = useAppTheme();
  return (
    <View
      onLayout={e => console.log(e.nativeEvent.layout)}
      className="gap-[16]">
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
        ItemSeparatorComponent={() => <Padding padding={8} />}
        data={sectionItem.data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return <BookHomeVertical item={item} />;
        }}
      />
    </View>
  );
};

type Book = {
  id: string;
  image: string;
  title: string;
  author: string;
  minsRead: number;
  minsListen: number;
};

const BookHomeVertical = memo(({ item }: { item: Book }) => {
  const { colors } = useAppTheme();
  return (
    <View style={{ gap: 8 }}>
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

const SectionBar = forwardRef<
  FlatList,
  { onSectionBarPress: (index: number) => void }
>(({ onSectionBarPress }, ref) => {
  const [selectedSection, setSelectedSection] = useState<number>(0);
  const { colors } = useAppTheme();
  const sectionBar = useMemo(
    () => [
      {
        id: 'sectionLabel1',
        label: 'Trending',
        icon: (
          <MaterialIcons
            name="local-fire-department"
            color={selectedSection === 0 ? colors.black : colors.white}
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
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
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
            color={selectedSection === 1 ? colors.black : colors.white}
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
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
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
          <MaterialCommunityIcons
            name="headphones"
            color={selectedSection === 2 ? colors.black : colors.white}
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
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
          {
            id: 'book1',
            image: 'https://picsum.photos/700',
            title: 'Title',
            author: 'Author',
            minsRead: 12,
            minsListen: 8,
          },
        ],
      },
    ],
    [colors.black, colors.white, selectedSection],
  );

  const handleSectionBarPress = (index: number) => {
    setSelectedSection(index);
    onSectionBarPress(index);
  };
  return (
    <FlatList
      ref={ref}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.sectionBarContainer]}
      data={sectionBar}
      renderItem={({ item, index }) => {
        const marginRight = index === sectionBar.length - 1 && {
          marginRight: 16,
        };
        const selectedStyle = {
          backgroundColor:
            index === selectedSection ? colors.primary : undefined,
          borderWidth: 1,
          borderColor: colors.gray4,
        };

        const textColor =
          index === selectedSection ? colors.black : colors.white;
        return (
          <AppButtonIcon
            onPress={() => handleSectionBarPress(index)}
            key={item.label}
            iconLeft={item.icon}
            label={item.label}
            style={[styles.sectionBarButton, marginRight, selectedStyle]}
            textColor={textColor}
          />
        );
      }}
    />
  );
});

export default HomeScreen;

const styles = StyleSheet.create({
  advertisement: {
    height: SCREEN_HEIGHT * 0.25,
    width: 'auto',
    marginTop: 82,
    borderRadius: 10,
  },
  sectionBarContainer: { gap: 4 },
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
