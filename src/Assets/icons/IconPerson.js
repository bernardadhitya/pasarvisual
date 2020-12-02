import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const IconPerson = (props) => {
  const { color } = props;
  return (
    <Svg
      width={16}
      height={20}
      viewBox="0 0 16 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8 11c4.41 0 8 3.533 8 7.875 0 .621-.51 1.125-1.143 1.125H1.143A1.134 1.134 0 010 18.875C0 14.533 3.59 11 8 11zM7.5 0C9.982 0 12 2.018 12 4.5S9.982 9 7.5 9A4.505 4.505 0 013 4.5C3 2.018 5.018 0 7.5 0z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default IconPerson
