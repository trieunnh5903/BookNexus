import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="m17.226 11.925-5.558 3.208a2.225 2.225 0 0 1-3.333-1.924L5 15.134a2.225 2.225 0 0 1-3.333-1.925V6.792a2.19 2.19 0 0 1 1.108-1.917 2.2 2.2 0 0 1 1.117-.308c.39.002.771.105 1.108.3l3.334 1.925a2.21 2.21 0 0 1 1.108-1.925 2.22 2.22 0 0 1 2.225 0l5.558 3.208a2.225 2.225 0 0 1 0 3.85m-8.89-3.208-4.167-2.4a.558.558 0 0 0-.833.475v6.417a.558.558 0 0 0 .833.475l4.167-2.4zm8.058.833-5.558-3.242a.57.57 0 0 0-.559 0 .55.55 0 0 0-.275.484v6.417a.55.55 0 0 0 .275.483.65.65 0 0 0 .284.075.5.5 0 0 0 .275-.075l5.558-3.209a.558.558 0 0 0 0-.966z"
      fill="currentColor"
    />
  </Svg>
);
export default SVGComponent;
