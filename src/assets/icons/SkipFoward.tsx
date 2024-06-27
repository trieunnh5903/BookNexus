import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" color="#000" {...props}>
    <Path
      d="M5 21a3 3 0 0 0 3-3v-2.84l9 5.37a3.21 3.21 0 0 0 3.29 0A3.38 3.38 0 0 0 22 17.58V6.42a3.38 3.38 0 0 0-1.72-3 3.24 3.24 0 0 0-3.28.05L8 8.84V6a3 3 0 0 0-6 0v12a3 3 0 0 0 3 3m3.68-10.23L18 5.19a1.23 1.23 0 0 1 1.28 0A1.4 1.4 0 0 1 20 6.42v11.16a1.4 1.4 0 0 1-.71 1.25 1.3 1.3 0 0 1-.62.17 1.23 1.23 0 0 1-.67-.19l-9.33-5.58a1.45 1.45 0 0 1 0-2.46zM4 6a1 1 0 0 1 2 0v12a1 1 0 1 1-2 0z"
      fill="currentColor"
    />
  </Svg>
);
export default SVGComponent;
