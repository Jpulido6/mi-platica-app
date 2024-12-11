import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
    width: number,
    height: number,
    props?: SvgProps,
    color: string
}
const CloseIcon = ({ 
    width,
    height,
    props,
    color }: Props) => (
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
            d="M19 5 5 19M5 5l14 14"
            color="currentColor"
        />
    </Svg>
)
export default CloseIcon