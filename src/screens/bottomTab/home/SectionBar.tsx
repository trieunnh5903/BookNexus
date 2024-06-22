import { StyleSheet } from 'react-native';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useAppTheme } from '@/hooks';
import { AppButtonIcon } from '@/components/button';
import { MaterialCommunityIcons, MaterialIcons } from '@/components/icons';

interface SectionBarProps {
  onSectionBarPress: (index: number) => void;
  selectedSection: number;
}

export type SectionBarHandle = {
  scrollToIndex: (index: number) => void;
};

const SectionBar = forwardRef<SectionBarHandle, SectionBarProps>(
  ({ onSectionBarPress, selectedSection }, ref) => {
    console.log('sectiombar');

    const { colors } = useAppTheme();
    const flatListRef = useRef<FlatList>(null);

    useImperativeHandle(ref, () => ({
      scrollToIndex: index => {
        if (flatListRef.current) {
          flatListRef.current.scrollToIndex({ animated: true, index });
        }
      },
    }));

    useEffect(() => {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: selectedSection,
      });
    }, [selectedSection]);

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

    return (
      <FlatList
        ref={flatListRef}
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
              onPress={() => onSectionBarPress(index)}
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
  },
);

export default SectionBar;

const styles = StyleSheet.create({
  sectionBarContainer: { gap: 4 },
  sectionBarButton: {
    borderRadius: 20,
    paddingLeft: 44,
  },
});
