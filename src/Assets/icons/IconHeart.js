import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const IconHeart = (props) => {
  const { color } = props;
  return (
    <Svg
      width={12}
      height={11}
      viewBox="0 0 12 11"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6 11C-5.706 4.46 2.76-3.672 6 1.804 9.24-3.672 17.706 4.46 6 11z"
        fill="#96A7AF"
        fillRule="nonzero"
      />
    </Svg>
  )
}

export default IconHeart
