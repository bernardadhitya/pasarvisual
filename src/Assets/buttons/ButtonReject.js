import * as React from "react"
import Svg, { G, Rect, Path, Text, TSpan } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const ButtonReject = (props) => {
  return (
    <Svg
      width={91}
      height={39}
      viewBox="0 0 91 39"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G fill="none" fillRule="evenodd">
        <Rect fill="#FF575F" width={91} height={39} rx={19.5} />
        <Path
          d="M26.375 13.931c.346.347.344.91.003 1.25l-4.705 4.704 4.705 4.705a.887.887 0 01-1.254 1.254l-4.704-4.706-4.703 4.705a.881.881 0 01-1.167.071l-.084-.074a.887.887 0 01-.003-1.25l4.704-4.705-4.704-4.703a.881.881 0 01-.07-1.167l.073-.084a.887.887 0 011.25-.003l4.704 4.704 4.704-4.704a.882.882 0 011.25.003z"
          fill="#FFF"
        />
        <Text
          fontSize={14}
          fontWeight="bold"
          fill="#FFF"
        >
          <TSpan x={34} y={24}>
            {"Reject"}
          </TSpan>
        </Text>
      </G>
    </Svg>
  )
}

export default ButtonReject;
