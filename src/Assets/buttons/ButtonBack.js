import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"
import { DarkColors } from "../../Constants/Colors";
/* SVGR has dropped some elements not supported by react-native-svg: title */

const ButtonBack = (props) => {
  const { size } = props;
  return (
    <Svg
      width={ size ? size : 58 }
      height={ size ? size : 58 }
      viewBox="0 0 58 59"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G fill="none" fillRule="evenodd">
        <Rect
          width={58}
          height={58}
          rx={12}
          transform="translate(0 .5)"
          fill={DarkColors["sub-primary"]}
        />
        <Path
          d="M25.5 34L21 29.5m0 0l4.5-4.5M21 29.5h16"
          stroke={DarkColors.primary}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}

export default ButtonBack
