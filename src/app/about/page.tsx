import React from 'react'
import Stack from 'naxui/Stack'
import Text from 'naxui/Text'
import Main from '@src/Pages/About/Main'
import { MoreAbout } from '@src/Pages/About/MoreAbout'
import Project from '@src/Pages/About/Project'

const About = () => {
    return (
        <Stack p={3} >
            <Text variant='h5' fontWeight={400} fontSize={20} color="color.subtext" >
                About
            </Text>
            <Stack mb={7} mt={4} >
                <Main />
            </Stack>
            <Stack mb={7}>
                <MoreAbout />
            </Stack>
            <Stack mb={7}>
                <Project />
            </Stack>
        </Stack>
    )
}

export default About