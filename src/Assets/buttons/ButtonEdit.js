import * as React from "react"
import Svg, { Defs, Path, G, Use } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title, filter */

const ButtonEdit = (props) => {
  return (
    <Svg
      width={43}
      height={43}
      viewBox="0 0 43 43"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G fill="none" fillRule="evenodd">
        <Path
          d="M21.5 43C33.374 43 43 33.374 43 21.5S33.374 0 21.5 0 0 9.626 0 21.5 9.626 43 21.5 43z"
          fill="#0062FF"
        />
        <Path
          d="M26.523 20.5l-3.033-3.037 2.192-2.196 3.031 3.035-2.19 2.197zm-7.808 7.824l-3.349.306.297-3.33 6.32-6.328 3.033 3.037-6.3 6.315zm11.616-11.589h-.001l-3.08-3.085c-.834-.833-2.267-.872-3.056-.078L14.072 23.707a2.224 2.224 0 00-.641 1.367l-.427 4.698a1.13 1.13 0 001.223 1.223l4.692-.426a2.22 2.22 0 001.366-.64l10.123-10.136c.819-.823.784-2.195-.077-3.058z"
          fill="#FFF"
        />
      </G>
    </Svg>
  )
}

export default ButtonEdit
