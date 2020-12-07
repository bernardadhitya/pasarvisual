import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { DarkColors } from "../../Constants/Colors"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const IconSend = (props) => {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 29 29"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8 9.667l8.374 1.703c.634.127 1.129.622 1.258 1.256l1.7 8.374L25 4 8 9.667zM18.797 29c-.034 0-.066-.002-.098-.003a1.613 1.613 0 01-1.483-1.286l-2.689-13.238-13.237-2.69a1.61 1.61 0 01-.19-3.106L26.878.084a1.604 1.604 0 011.65.388c.432.432.582 1.07.39 1.65L20.324 27.9a1.61 1.61 0 01-1.527 1.1z"
        fill={DarkColors["primary"]}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default IconSend
