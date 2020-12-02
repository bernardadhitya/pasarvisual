import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const IconHome = (props) => {
  const { color } = props;
  return (
    <Svg
      width={18}
      height={20}
      viewBox="0 0 18 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.285.289c.377-.385 1.053-.385 1.43 0l7.709 7.889c.366.376.576.9.576 1.44v8.38C18 19.103 17.153 20 16.112 20H13v-9.006a1 1 0 00-1-1H6a1 1 0 00-1 1V20H1.889C.848 20 0 19.102 0 17.999V9.618c0-.54.21-1.064.575-1.44zM11 12v7H7v-7h4z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default IconHome
