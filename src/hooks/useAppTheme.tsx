import { MD2LightTheme, useTheme } from 'react-native-paper';

export const theme = {
  ...MD2LightTheme,
  roundness: 10,
  colors: {
    ...MD2LightTheme.colors,
    primary: '#CDE7BE',
    bgBlue: '#2D3047',
    bgShade: '#232538',
    bgTint: '#57596C',
    white: '#fff',
    black: '#000',
    gray1: '#C4CCCC',
    gray2: '#939999',
    gray3: '#626666',
    gray4: '#313333',
    gray5: '#272828',
  },
};

type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();
