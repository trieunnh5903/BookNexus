import { StyleSheet } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useAppTheme } from '@/hooks';
import { AppButtonText } from '@/components/button';
import { Section } from '@/types';
import { ColorValue } from 'react-native';
import Animated from 'react-native-reanimated';

interface SectionBarProps {
  onSectionBarPress: (index: number) => void;
  selectedSection: number;
  data: Section[];
}

interface ColoredIconProps {
  icon: React.JSX.Element;
  color: number | ColorValue;
}

const SectionBar = ({
  onSectionBarPress,
  selectedSection,
  data,
}: SectionBarProps) => {
  const { colors } = useAppTheme();
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: selectedSection,
    });
  }, [selectedSection]);

  return (
    <Animated.FlatList
      ref={flatListRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.sectionBarContainer]}
      data={data}
      renderItem={({ item, index }) => {
        const marginRight = index === data.length - 1 && {
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
          <AppButtonText
            onPress={() => onSectionBarPress(index)}
            key={item.label}
            iconLeft={<ColoredIcon icon={item.icon} color={textColor} />}
            label={item.label}
            style={[styles.sectionBarButton, marginRight, selectedStyle]}
            textColor={textColor}
          />
        );
      }}
    />
  );
};

const ColoredIcon = ({ icon, color }: ColoredIconProps) => {
  return React.cloneElement(icon, { color });
};

export default SectionBar;

const styles = StyleSheet.create({
  sectionBarContainer: { gap: 4 },
  sectionBarButton: {
    borderRadius: 20,
  },
});
