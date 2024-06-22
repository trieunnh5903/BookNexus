import { View } from 'react-native';
import React from 'react';
import { AppText } from '@/components/text';
import { Path, Svg } from 'react-native-svg';
import { useAppTheme } from '@/hooks';
import { Avatar } from 'react-native-paper';
import moment from 'moment';

const getTimeOfDay = () => {
  const currentHour = moment().hour();

  if (currentHour >= 5 && currentHour < 12) {
    return 'Morning';
  } else if (currentHour >= 12 && currentHour < 17) {
    return 'Afternoon';
  } else {
    return 'Evening';
  }
};

const Header = () => {
  const timeOfDay = getTimeOfDay();
  const { colors } = useAppTheme();
  return (
    <View className="flex-row justify-between">
      <View style={{ gap: 4 }}>
        <AppText fontSize={32} fontWeight={'bold'}>
          Good {timeOfDay}
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
      <Avatar.Image size={48} source={{ uri: 'https://picsum.photos/300' }} />
    </View>
  );
};

export default Header;
