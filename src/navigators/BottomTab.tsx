import React, { useCallback } from 'react';
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from './type';
import { ExploreScreen, HomeScreen, LibraryScreen } from '@/screens';
import { useAppTheme } from '@/hooks';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather, Ionicons } from '@/components/icons';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { colors } = useAppTheme();
  return (
    <View
      style={[
        {
          backgroundColor: colors.black,
        },
        styles.tabBar,
      ]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Library':
            iconName = 'library-outline';
            break;
          default:
            iconName = 'search';
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const color = isFocused ? colors.primary : colors.gray1;
        return (
          <Pressable
            key={label + iconName}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.button}>
            {iconName === 'library-outline' ? (
              <Ionicons name={iconName} size={24} color={color} />
            ) : (
              <Feather name={iconName} size={24} color={color} />
            )}
            <Text style={{ color: color }}>{label as string}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};
const screenOptions: BottomTabNavigationOptions = { headerShown: false };
const BottomTab = () => {
  const renderTabBar = useCallback(
    (props: BottomTabBarProps) => <CustomTabBar {...props} />,
    [],
  );
  return (
    <Tab.Navigator screenOptions={screenOptions} tabBar={renderTabBar}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 6,
  },
});
