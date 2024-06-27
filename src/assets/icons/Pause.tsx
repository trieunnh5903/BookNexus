import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
    <Path
      d="M14.555 19.889a2.667 2.667 0 0 1-2.666-2.667V4.778a2.667 2.667 0 1 1 5.333 0v12.444a2.667 2.667 0 0 1-2.667 2.667m.889-15.111a.889.889 0 1 0-1.778 0v12.444a.889.889 0 0 0 1.778 0zm-8 15.11a2.667 2.667 0 0 1-2.667-2.666V4.778a2.667 2.667 0 0 1 5.334 0v12.444a2.667 2.667 0 0 1-2.667 2.667m.889-15.11a.889.889 0 1 0-1.778 0v12.444a.889.889 0 1 0 1.778 0z"
      fill="currentColor"
    />
  </Svg>
);
export default SVGComponent;
