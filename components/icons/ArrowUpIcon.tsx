import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
    width?: number
    height?: number
    props?: SvgProps
    color: string
}
const ArrowUpIcon = ({ height = 24, props, width = 24, color }: Props) => (
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
            d="M18 15s-4.419-6-6-6-6 6-6 6"
            color="currentColor"
        />
    </Svg>
)
export default ArrowUpIcon