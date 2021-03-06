import * as React from "react"
import Svg, { Defs, Path, G, Use } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title, filter */

const IconMessage = (props) => {
  const { color } = props;
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.302 1.332C0 2.665 0 4.81 0 9.098v8.695c0 .89 0 1.335.115 1.573.247.511.825.757 1.352.574.246-.086.554-.4 1.169-1.03.498-.51.748-.765 1.022-.971a4.39 4.39 0 011.95-.827c.337-.053.69-.053 1.394-.053h4.665c3.652 0 5.479 0 6.708-1.033a4.5 4.5 0 00.616-.63C20 14.138 20 12.268 20 8.53c0-3.74 0-5.609-1.009-6.867a4.499 4.499 0 00-.616-.63C17.145 0 15.32 0 11.667 0H8.889c-4.19 0-6.285 0-7.587 1.332zM5 10.235c.92 0 1.667-.763 1.667-1.705 0-.943-.747-1.706-1.667-1.706s-1.667.763-1.667 1.706c0 .942.747 1.705 1.667 1.705zm6.667-1.705c0 .942-.747 1.705-1.667 1.705S8.333 9.472 8.333 8.53c0-.943.747-1.706 1.667-1.706s1.667.763 1.667 1.706zM15 10.235c.92 0 1.667-.763 1.667-1.705 0-.943-.747-1.706-1.667-1.706s-1.667.763-1.667 1.706c0 .942.747 1.705 1.667 1.705z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default IconMessage
