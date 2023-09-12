import React from 'react'
import Link from 'next/link'
import Stack from 'naxui/Stack'
import Box from 'naxui/Box'
import Text from 'naxui/Text'

import KeyboardArrowRightIcon from 'naxui-icons/outlined/KeyboardArrowRight'

interface ProjectCardProps {
    title: string;
    subtitle: string;
    url: string;
    image: string;
}

const ProjectCard = ({ title, subtitle, url, image }: ProjectCardProps) => {
    return (
        <Link href={url}>
            <Stack
                bgcolor="color.paper"
                p={2}
                px={3}
                border={1}
                borderColor="#ffffff00"
                borderRadius={1.5}
                direction="row"
                alignItems="center"
                cursor="pointer"
                transition="0.3s"

                hover={{
                    border: 1,
                    borderColor: 'color.divider',

                    '& > .icon': {
                        color: 'color.text',
                    }
                }}
            >
                <Box>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={image} alt='' />
                </Box>
                <Box mx={2} flex={1} >
                    <Text variant='h6' fontSize={18} fontWeight={400} >
                        {title}
                    </Text>
                    <Text fontSize={16} color="color.subtext" mt={1} >
                        {subtitle}
                    </Text>
                </Box>
                <Box className='icon' color="color.subtext" transition="0.3s" >
                    <KeyboardArrowRightIcon />
                </Box>
            </Stack>
        </Link>
    )
}

export default ProjectCard