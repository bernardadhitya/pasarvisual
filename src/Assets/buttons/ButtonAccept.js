import * as React from "react"
import Svg, { Defs, Path, G, Rect, Text, TSpan, Use } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const ButtonAccept = (props) => {
  return (
    <Svg
      width={91}
      height={39}
      viewBox="0 0 91 39"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Defs>
        <Path
          d="M18.863 26a1 1 0 01-.729-.315l-4.863-5.18a1 1 0 111.457-1.368l4.125 4.39 8.408-9.201a1 1 0 011.477 1.348l-9.137 10a.998.998 0 01-.73.326h-.008z"
          id="prefix__a"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Rect fill="#0062FF" width={91} height={39} rx={19.5} />
        <Text
          fontSize={14}
          fontWeight="bold"
          fill="#FFF"
        >
          <TSpan x={34} y={25}>
            {"Accept"}
          </TSpan>
        </Text>
        <Use fill="#FFF" xlinkHref="#prefix__a" />
      </G>
    </Svg>
  )
}

export default ButtonAccept;
