import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
interface Props {
    width?: number
    height?: number
    props?: SvgProps
    color:string
}
const EyeIcon = ({ height = 24, props, width = 24, color}: Props) => (
    <Svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        {...props}
    >
        <G
            fill='none'
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        >
            <Path d="M21.544 11.045c.304.426.456.64.456.955 0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045" />
            <Path d="M15 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0" />
        </G>
    </Svg>
)
export default EyeIcon
