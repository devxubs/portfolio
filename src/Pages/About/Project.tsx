/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Stack from 'naxui/Stack'
import Title from '@src/components/Title'
import Subtitle from '@src/components/Subtitle'
import Box from 'naxui/Box'
import ProjectCard from '@src/components/ProjectCard'

const Project = () => {
    return (
        <Stack>
            <Title>
                My Side Projects
            </Title>
            <Subtitle mt={2} mb={5} >
                I did passion side projects in the weekend,
                please take a look you will love it (i hope).
            </Subtitle>
            <Stack
                bgcolor="color.common"
                p={2}
                borderRadius={2}
            >
                <Box my={.8} >
                    <ProjectCard
                        title="Rectangle"
                        subtitle="Product design, Icon design"
                        url="/project/rectangle"
                        image='/images/project-1.svg'
                    />
                </Box>
                <Box my={.8} >
                    <ProjectCard
                        title="Morva Labs"
                        subtitle="Visual design, Branding"
                        url="/project/morva-labs"
                        image='/images/project-2.svg'
                    />
                </Box>
                <Box my={.8} >
                    <ProjectCard
                        title="Simply"
                        subtitle="Landing page, Illustration design"
                        url="/project/simply"
                        image='/images/project-3.svg'
                    />
                </Box>
            </Stack>
        </Stack>
    )
}

export default Project