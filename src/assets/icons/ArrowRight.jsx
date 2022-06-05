import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = () => (
  <Svg
    width={13}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="m2 2 8 7.979L2 17"
      stroke="#fff"
      strokeWidth={3}
      strokeLinecap="round"
    />
  </Svg>
)

export default SvgComponent
