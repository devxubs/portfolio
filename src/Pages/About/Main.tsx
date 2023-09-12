/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Stack from 'naxui/Stack'
import Title from '@src/components/Title'
import Subtitle from '@src/components/Subtitle'
import Box from 'naxui/Box'

const Main = () => {
    return (
        <Stack>
            <Title>
                It&apos;s Me Naxrul Ahmed
            </Title>
            <Subtitle mt={2} mb={5} >
                I&apos;m Naxrul Ahmed, a product designer with over 8 years
                of experience, currently residing in Jakarta, Indonesia.
                I have a deep passion for crafting purposeful interfaces
                and products. My main goal is to bridge the divide
                between people and technology, transforming intricate
                challenges into meaningful and seamless experiences.
            </Subtitle>
            <Box
                bgcolor="color.common"
                p={2}
                borderRadius={2}
            >
                <img style={{ borderRadius: 16, }} src="/images/naxrul.jpeg" alt="" />
            </Box>
        </Stack>
    )
}

export default Main