import React from 'react'
import * as Svg from 'react-native-svg'
const { Path } = Svg

const BackBtn = (props) => {
  const { width, height } = props
  return (
    <Svg height={height} width={width} viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M2813.516,33.248l-7.964,8.008,8.032,8.2"
        transform="translate(-2803.445 -31.126)"
        fill="none"
        stroke="#007aff"
        strokeLinecap="round"
        strokeWidth="3"
      />
    </Svg>
  )
}

export default BackBtn
