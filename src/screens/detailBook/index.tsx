import { Image, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import { useAppSelector, useAppTheme } from '@/hooks';
import { Container, Padding, SectionItem } from '@/components';
import { AppText } from '@/components/text';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants';
import { BlurView } from '@react-native-community/blur';
import { AppButtonIcon } from '@/components/button';
import { MaterialCommunityIcons, MaterialIcons } from '@/components/icons';
import { Chip, IconButton } from 'react-native-paper';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Book } from '@/types';

const TITLE_SIZE = 20;
const DetailBook = () => {
  const { detailBook: book } = useAppSelector(state => state.book);
  const { colors } = useAppTheme();
  const onSimilarBookPress = (_similarBook: Book) => {};
  return (
    <Container>
      <ScrollView>
        <Image source={{ uri: book.image }} style={styles.imageBackground} />
        <BlurView
          style={styles.absolute}
          blurType="dark"
          blurAmount={4}
          reducedTransparencyFallbackColor="white"
        />
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
            <View
              style={[
                {
                  borderColor: colors.gray1,
                },
                styles.divider,
              ]}
            />
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
            <AppText fontWeight={'bold'} fontSize={32}>
              {book.title}
            </AppText>
            <AppText fontWeight={'bold'} fontSize={TITLE_SIZE}>
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
      </ScrollView>
    </Container>
  );
};

const ListChapters = () => {
  const { detailBook: book } = useAppSelector(state => state.book);
  const { colors } = useAppTheme();
  const ItemSeprator = React.useCallback(() => <Padding padding={5} />, []);

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
                <AppText>{item.subtitle}</AppText>
              </View>
              <View className="flex-row items-center">
                <IconButton
                  icon="glasses"
                  iconColor={colors.white}
                  containerColor={colors.bgShade}
                  size={24}
                  onPress={() => console.log('Pressed')}
                />
                <IconButton
                  icon="headphones"
                  iconColor={colors.white}
                  containerColor={colors.bgShade}
                  size={24}
                  onPress={() => console.log('Pressed')}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

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
          <AppText color={colors.primary}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </AppText>
        </Pressable>
      </View>
    </View>
  );
};

export default DetailBook;

const styles = StyleSheet.create({
  divider: {
    borderWidth: 1,
    height: '60%',
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  chip: { borderRadius: 8 },
  readBook: {
    position: 'absolute',
    borderRadius: 16,
    flexDirection: 'row',
    bottom: -30,
    paddingVertical: 6,
  },

  imageBackground: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.35,
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
