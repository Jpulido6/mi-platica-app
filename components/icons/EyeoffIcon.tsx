import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
    width?: number
    height?: number
    props?: SvgProps
    color:string
}
const EyeOffIcon = ({ height = 24, props, width = 24,color }: Props) => (
    <Svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        {...props}
    >
        <Path
            fill='none'
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M22 8s-4 6-10 6S2 8 2 8m13 5.5 1.5 2.5m3.5-5 2 2M2 13l2-2m5 2.5L7.5 16"
        />
    </Svg>
)
export default EyeOffIcon