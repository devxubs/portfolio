/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Stack from 'naxui/Stack'
import Text from "naxui/Text";
import Box from 'naxui/Box';
import Button from 'naxui/Button';

import ProjectDitals from '@src/Pages/ProjectPreview/ProjectDitals';
import Title from '@src/components/Title';
import Subtitle from '@src/components/Subtitle';

import ArrowForwardIcon from 'naxui-icons/filled/ArrowForward'
import ProjectCard from '@src/components/ProjectCard';
import Link from 'next/link';

const page = () => {
    return (
        <Stack>
            <Stack>
                <ProjectDitals />
            </Stack>
            <Stack p={3} >
                <Stack my={3} >
                    <Title>
                        Simply
                    </Title>
                    <Subtitle mt={2}>
                        Elevate your company&apos;s employee management with
                        our user-friendly website. Stay ahead of the competition
                        with smooth UX and top-notch workforce solutions.
                    </Subtitle>
                </Stack>
                <Stack direction="row" mb={3} >
                    <Button
                        variant='filled'
                        color="default"
                        size='medium'
                        fontSize={14}
                        textTransform="capitalize"
                        endIcon={<ArrowForwardIcon fontSize={20} />}
                    >
                        Visit Website
                    </Button>
                </Stack>
                <Box mb={2} >
                    <img
                        src="/images/project-preview-1.webp"
                        alt=""
                    />
                </Box>
                <Subtitle my={3}>
                    A business owner enlisted my expertise as a product
                    designer to develop a website that would boost their
                    brand awareness and conversions. Crafting a modern,
                    professional website, my priority was to set them apart
                    from competitors and attract new customers.
                </Subtitle>
                <Box mb={2} >
                    <img
                        src="/images/project-preview-2.webp"
                        alt=""
                    />
                </Box>
                <Stack my={3} >
                    <Title fontSize={22} >
                        The Problems to Solve
                    </Title>
                    <Subtitle mt={2}>
                        To tackle this endeavor, our approach revolved
                        around shaping a unique brand identity that adeptly
                        conveyed Rectangle&apos;s fundamental principles of
                        sustainability, innovation, and authenticity. Our
                        team devoted meticulous attention to crafting an
                        all-encompassing brand strategy, encompassing both
                        product design and website development, geared
                        towards establishing a visually captivating and
                        unforgettable brand persona, distinguishing Rectangle
                        amidst its competition.
                    </Subtitle>
                </Stack>
                <Box mb={2} >
                    <img
                        src="/images/project-preview-3.webp"
                        alt=""
                    />
                </Box>
                <Stack my={3} >
                    <Title fontSize={22} >
                        Our Solution
                    </Title>
                    <Subtitle mt={2}>
                        Through thoughtful product design, we ensured that
                        Rectangle&apos;s offerings seamlessly aligned
                        with their core values, incorporating sustainable
                        materials and innovative design principles.
                        Concurrently, our website development team crafted a
                        user-centric digital platform that not only
                        showcased Rectangle&apos;s products but also
                        effectively conveyed their environmental mission,
                        fostering authentic engagement with visitors.
                    </Subtitle>
                </Stack>
            </Stack>
            <Stack mb={5} >
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
            </Stack>
        </Stack>
    )
}

export default page