import * as React from "react"
import Svg, {
  Defs,
  Rect,
  Mask,
  Use,
  G,
  Circle,
  Path,
  Text,
  TSpan,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const ButtonUpload = (props) => {
  return (
    <Svg
      width={151}
      height={180}
      viewBox="0 0 151 180"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Defs>
        <Rect id="prefix__a" x={0} y={0} width={150} height={180} rx={25} />
        <Mask
          id="prefix__b"
          maskContentUnits="userSpaceOnUse"
          maskUnits="objectBoundingBox"
          x={0}
          y={0}
          width={150}
          height={180}
          fill="#fff"
        >
          <Use xlinkHref="#prefix__a" />
        </Mask>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Circle fill="#286053" cx={75} cy={70} r={30} />
        <Circle fill="#3ED598" cx={75} cy={70} r={24} />
        <Use
          stroke="#286053"
          mask="url(#prefix__b)"
          strokeWidth={2}
          strokeDasharray="6,6"
          xlinkHref="#prefix__a"
        />
        <Path
          d="M66 70a1 1 0 011-1h7v-7a1 1 0 112 0v7h7a1 1 0 110 2h-7v7a1 1 0 11-2 0v-7h-7a1 1 0 01-1-1z"
          fill="#FFF"
          fillRule="nonzero"
        />
        <Text
          fontSize={14}
          fontWeight={500}
          fill="#3ED598"
        >
          <TSpan x={32.949} y={122}>
            {"Add new item"}
          </TSpan>
        </Text>
      </G>
    </Svg>
  )
}

export default ButtonUpload;
