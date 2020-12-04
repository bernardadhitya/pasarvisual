import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const ButtonLogout = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G fill="none" fillRule="evenodd">
        <Rect fill="#FF575F" width={24} height={24} rx={4} />
        <Path
          d="M7.25 5c.412 0 .75.366.75.813 0 .446-.338.812-.75.812H6.5v9.75h.75c.412 0 .75.366.75.813 0 .446-.338.812-.75.812h-1.5c-.412 0-.75-.366-.75-.813V5.813C5 5.367 5.338 5 5.75 5zm8.092 2.146a.854.854 0 011.161.194l2.345 3.2a.773.773 0 01-.015.94l-2.5 3.2a.844.844 0 01-.667.32.853.853 0 01-.5-.16.778.778 0 01-.166-1.12l1.5-1.92H9.833c-.46 0-.833-.357-.833-.8 0-.442.373-.8.833-.8H16.5c.025 0 .046.012.071.015L15.14 8.26a.78.78 0 01.202-1.114z"
          fill="#FFF"
        />
      </G>
    </Svg>
  )
}

export default ButtonLogout;
