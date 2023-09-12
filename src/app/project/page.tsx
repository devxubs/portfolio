/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Stack from 'naxui/Stack'
import Text from 'naxui/Text'
import Title from '@src/components/Title'
import Subtitle from '@src/components/Subtitle'
import Box from 'naxui/Box'
import ProjectCard from '@src/components/ProjectCard'

const page = () => {
    return (
        <Stack p={3} >
            <Text variant='h5' fontWeight={400} fontSize={20} color="color.subtext" >
                About
            </Text>
            <Stack mt={4} >
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
                    <Box my={.8} >
                        <ProjectCard
                            title="Glassdoor"
                            subtitle="Icon design, Illustration design"
                            url="/project/glassdoor"
                            image='/images/project-4.svg'
                        />
                    </Box>
                    <Box my={.8} >
                        <ProjectCard
                            title="Seven LTD."
                            subtitle="Branding, Landing page"
                            url="/project/seven-ltd"
                            image='/images/project-5.svg'
                        />
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default page