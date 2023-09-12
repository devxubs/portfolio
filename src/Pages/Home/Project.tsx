import React from 'react'
import Link from 'next/link'
import Stack from 'naxui/Stack'
import Text from 'naxui/Text'
import Button from 'naxui/Button'

import ArrowForwardIcon from 'naxui-icons/outlined/ArrowForward'
import ProjectCard from '@src/components/ProjectCard'
import Box from 'naxui/Box'

const Project = () => {
    return (
        <Stack
            bgcolor="color.common"
            p={2}
            borderRadius={2}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Text variant='h5' fontWeight={400} fontSize={20} color="color.subtext" >
                    Projects
                </Text>
                <Link href="/project" >
                    <Button
                        endIcon={<ArrowForwardIcon />}
                        size='small'
                        color='default'
                    >
                        View All
                    </Button>
                </Link>
            </Stack>
            <Stack mt={3} >
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