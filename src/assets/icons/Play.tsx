import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="black" {...props}>
    <Path
      fill="currentColor"
      d="M15.45 7.5 7.4 2.883a2.85 2.85 0 0 0-4.275 2.5v9.267A2.85 2.85 0 0 0 7.4 17.116l8.05-4.616a2.852 2.852 0 0 0 0-4.934zm-.833 3.491-8.05 4.684a1.2 1.2 0 0 1-1.183 0 1.18 1.18 0 0 1-.592-1.025v-9.3a1.18 1.18 0 0 1 .592-1.025c.18-.101.384-.156.591-.159.207.004.41.059.592.159l8.05 4.65a1.183 1.183 0 0 1 0 2.05z"
    />
  </Svg>
);
export default SVGComponent;
