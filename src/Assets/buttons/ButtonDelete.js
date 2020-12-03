import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const ButtonDelete = (props) => {
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
          fill="#FF575F"
        />
        <Path
          d="M28.49 15.36a.978.978 0 01.004 1.379l-5.186 5.185 5.186 5.188a.978.978 0 01-1.382 1.382l-5.187-5.187-5.186 5.187a.971.971 0 01-1.293.072l-.086-.076a.978.978 0 01-.003-1.378l5.186-5.188-5.186-5.185a.971.971 0 01-.073-1.293l.076-.086a.978.978 0 011.379-.003l5.186 5.185 5.187-5.185a.972.972 0 011.378.003z"
          fill="#FFF"
        />
      </G>
    </Svg>
  )
}

export default ButtonDelete
