import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
interface Props{
    width?:number
    height?:number
    props?:SvgProps
    color:string
}

const ArrowRightIcon = ({width=24, height=24,props, color}:Props) => (
    <Svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        {...props}
    >
        <Path
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 6s6 4.419 6 6-6 6-6 6"
        />
    </Svg>
)
export default ArrowRightIcon