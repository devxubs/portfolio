import React, { ReactNode } from 'react'
import Text, { TextProps } from 'naxui/Text'

type TitleProps = {
    children: ReactNode,
} & TextProps

const Title = ({ children, ...res }: TitleProps) => {
    return (
        <Text
            variant='h1'
            m={0}
            fontSize={36}

            {...res}
        >
            {children}
        </Text>
    )
}

export default Title