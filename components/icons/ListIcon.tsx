import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
interface Props {
    height?: number;
    width?: number;
    props?: SvgProps;
    color:string
}
const ListIcon = ({ height = 24, props, width = 24, color}: Props) => (
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
            d="M3 5.5h10m5.6 11.393c-1.067.714-1.6 1.071-1.6 1.607s.533.893 1.6 1.607c1.067.715 1.6 1.072 2 .804s.4-.982.4-2.411 0-2.143-.4-2.411-.933.09-2 .804m0-13C17.533 4.607 17 4.964 17 5.5s.533.893 1.6 1.607c1.067.715 1.6 1.072 2 .804S21 6.93 21 5.5s0-2.143-.4-2.411-.933.09-2 .804M3 12h10M3 18.5h10"
        />
    </Svg>
)
export default ListIcon
