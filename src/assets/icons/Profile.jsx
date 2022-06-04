import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = ({fill="#DBDDE1"}) => (
  <Svg
    width={24}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M11.745 0a5.69 5.69 0 1 1 0 11.38 5.69 5.69 0 0 1 0-11.38Zm0 14.225c6.288 0 11.38 2.546 11.38 5.69v2.844H.365v-2.845c0-3.143 5.093-5.69 11.38-5.69Z"
      fill={fill}
    />
  </Svg>
)

export default SvgComponent
