import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
interface Props {
    width?: number
    height?: number
    props?: SvgProps
    color:string
}

const HomeIcon = ({ height = 24, props, width = 24, color }: Props) => (
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
            <Path d="M15 17c-.8.622-1.85 1-3 1s-2.2-.378-3-1" />
            <Path d="M2.352 13.214c-.354-2.298-.53-3.446-.096-4.465s1.398-1.715 3.325-3.108L7.021 4.6C9.418 2.867 10.617 2 12.001 2c1.382 0 2.58.867 4.978 2.6l1.44 1.041c1.927 1.393 2.89 2.09 3.325 3.108.434 1.019.258 2.167-.095 4.464l-.301 1.96c-.5 3.256-.751 4.884-1.919 5.856S16.554 22 13.14 22h-2.28c-3.415 0-5.122 0-6.29-.971-1.168-.972-1.418-2.6-1.918-5.857z" />
        </G>
    </Svg>
)
export default HomeIcon

