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
      d="M.126 2.976A2.976 2.976 0 0 1 3.103 0H20.96a2.977 2.977 0 0 1 2.977 2.976v11.906a2.977 2.977 0 0 1-2.977 2.977H6.695c-.394 0-.773.157-1.052.436L1.397 22.54a.744.744 0 0 1-1.27-.526V2.976ZM7.567 8.93a1.488 1.488 0 1 0-2.976 0 1.488 1.488 0 0 0 2.976 0Zm5.953 0a1.488 1.488 0 1 0-2.976 0 1.488 1.488 0 0 0 2.976 0Zm4.465 1.489a1.488 1.488 0 1 0 0-2.977 1.488 1.488 0 0 0 0 2.977Z"
      fill={fill}
    />
  </Svg>
)

export default SvgComponent
