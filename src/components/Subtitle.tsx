import React, { ReactNode } from 'react'
import Text, { TextProps } from 'naxui/Text'

type SubtitleProps = {
    children: ReactNode,
} & TextProps


const Subtitle = ({ children, ...res }: SubtitleProps) => {
    return (
        <Text
            m={0}
            fontSize={18}
            color={"color.subtext"}
            lineHeight="170%"

            {...res}
        >
            {children}
        </Text>
    )
}

export default Subtitle