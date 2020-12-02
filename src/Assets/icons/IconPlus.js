import * as React from "react"
import Svg, { Defs, Path, Use } from "react-native-svg"

const IconPlus = (props) => {
  const { color } = props;
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Defs>
        <Path
          d="M18.75 8.75h-7.5v-7.5a1.25 1.25 0 10-2.5 0v7.5h-7.5a1.25 1.25 0 100 2.5h7.5v7.5a1.25 1.25 0 102.5 0v-7.5h7.5a1.25 1.25 0 100-2.5"
          id="prefix__a"
        />
      </Defs>
      <Use fill={color} xlinkHref="#prefix__a" fillRule="evenodd" />
    </Svg>
  )
}

export default IconPlus
