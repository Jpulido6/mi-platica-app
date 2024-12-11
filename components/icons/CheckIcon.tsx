import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
interface Props {
    width?: number
    height?: number
    props?: SvgProps
    color: string
}
const CheckIcon = ({ height = 24, props, width = 24, color }: Props) => (
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
            d="m5 14 3.5 3.5L19 6.5"
            color="currentColor"
        />
    </Svg>
)
export default CheckIcon