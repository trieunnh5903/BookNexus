import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      fill="currentColor"
      d="M14.472 1.562a.73.73 0 0 0-.577.746v14.615a.73.73 0 1 0 1.442 0V2.308a.73.73 0 0 0-.794-.746zm-9.231.77a.73.73 0 0 0-.577.745v13.077a.73.73 0 1 0 1.442 0V3.077a.73.73 0 0 0-.793-.745zm6.923 2.307a.73.73 0 0 0-.577.746v8.461a.732.732 0 1 0 1.442 0V5.385a.73.73 0 0 0-.793-.746zm-9.23.77a.73.73 0 0 0-.578.745v6.923a.731.731 0 1 0 1.442 0V6.154a.73.73 0 0 0-.792-.746h-.073m4.615.769a.73.73 0 0 0-.577.745v5.385a.73.73 0 1 0 1.441 0V6.923a.73.73 0 0 0-.792-.745h-.073m9.23 0a.73.73 0 0 0-.576.745v5.385a.73.73 0 1 0 1.442 0V6.923a.73.73 0 0 0-.794-.745zM.626 7.716a.73.73 0 0 0-.577.746v2.307a.73.73 0 1 0 1.442 0V8.462a.73.73 0 0 0-.794-.746H.625m9.23 0a.73.73 0 0 0-.577.746v2.307a.731.731 0 1 0 1.442 0V8.462a.73.73 0 0 0-.792-.746zm9.231 0a.73.73 0 0 0-.577.746v2.307a.73.73 0 1 0 1.442 0V8.462a.73.73 0 0 0-.793-.746z"
    />
  </Svg>
);
export default SVGComponent;
