import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const IconSearch = (props) => {
  const { color } = props;
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2 8c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6m15.707 8.293l-3.395-3.396A7.952 7.952 0 0016 8c0-4.411-3.589-8-8-8S0 3.589 0 8s3.589 8 8 8a7.952 7.952 0 004.897-1.688l3.396 3.395a.997.997 0 001.414 0 .999.999 0 000-1.414"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default IconSearch
