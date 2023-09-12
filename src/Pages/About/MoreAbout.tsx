/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Stack from 'naxui/Stack'
import Text from 'naxui/Text'
import Title from '@src/components/Title'
import Subtitle from '@src/components/Subtitle'
import Box from 'naxui/Box'

export const MoreAbout = () => {
    return (
        <Stack>
            <Title>
                More About Me
            </Title>
            <Subtitle mt={2} mb={2} >
                Brian Do holds a bachelor&apos;s degree in Graphic Design
                from a prestigious university in the United States and
                has a relentless drive for staying up-to-date with the
                latest technologies and design trends. Actively involved
                in the design community, Brian regularly participates in
                diverse design conferences and meetups.
            </Subtitle>
            <Subtitle mt={1} >
                When he&apos;s not immersed in design work, he finds solace
                in playing the guitar and exploring new coffee shops in his
                local area. Brian firmly believes in maintaining a healthy
                work-life balance, making sure to take breaks and reenergize
                his creativity. In his spare time, he also volunteers at a
                local animal shelter on weekends.
            </Subtitle>
        </Stack>
    )
}
