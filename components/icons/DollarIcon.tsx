import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
    width ?: number
    height ?: number
    props ?: SvgProps
    color:string
}

const DollarIcon = ({ height = 24, props, width = 24, color}: Props) => (
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
            d="M18.417 8.148C18.417 5.858 15.544 4 12 4S5.583 5.857 5.583 8.148s1.75 3.556 6.417 3.556 7 1.185 7 4.148S15.866 20 12 20s-7-1.857-7-4.148M12 2v20"
        />
    </Svg>
)
export default DollarIcon