import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
            <Path
                d="M29 7v16.94a1.996 1.996 0 01-.61 1.44 1.941 1.941 0 01-1.46.55 17.637 17.637 0 00-10.38 2.9.076.076 0 01-.04.02.138.138 0 01-.04.03c-.04.02-.08.03-.12.05l-.09.03a.864.864 0 01-.52 0l-.09-.03c-.04-.02-.08-.03-.12-.05a.138.138 0 01-.04-.03.076.076 0 01-.04-.02A17.599 17.599 0 004.09 26a.963.963 0 01-.76-.26A1.001 1.001 0 013 25V7a2.044 2.044 0 01.6-1.44 2.001 2.001 0 011.43-.57 18.858 18.858 0 018.43 2.12c.37.195.73.405 1.083.63a1.003 1.003 0 01.457.846V17a1 1 0 002 0V8.586a1.003 1.003 0 01.457-.847c.354-.224.713-.434 1.083-.629a18.858 18.858 0 018.43-2.12 2.07 2.07 0 011.43.57A2.044 2.044 0 0129 7z"
                data-name="Layer 10"
            />
        </Svg>
    )
}

export default SvgComponent