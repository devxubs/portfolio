import Image from 'next/image'
import Stack from 'naxui/Stack'
import Text from 'naxui/Text'
import IconButton from 'naxui/IconButton'

import CallIcon from 'naxui-icons/outlined/Call'
import PublicIcon from 'naxui-icons/outlined/Public'
import FaceIcon from 'naxui-icons/outlined/Face'
import YoutubeSearchedForIcon from 'naxui-icons/outlined/YoutubeSearchedFor'
import Title from '@src/components/Title'
import Box from 'naxui/Box'


export default function Intro() {
    return (
        <Stack
            direction="row"
            alignItems="center"
        >
            <Stack spacing={1} width="70%" >
                <Title>
                    I&apos;m Naxrul Ahmed
                </Title>
                <Text
                    m={0}
                    fontSize={18}
                    color={"color.subtext"}
                    lineHeight="170%"
                >
                    Product designer from Jakarta, ID. Currently
                    designing at Rectangle.
                </Text>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={.3}
                >
                    <Box>
                        <IconButton variant='text' color='primary' p={.5} >
                            <PublicIcon />
                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton variant='text' color='primary' p={.5} >
                            <FaceIcon />
                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton variant='text' color='primary' p={.5} >
                            <YoutubeSearchedForIcon />
                        </IconButton>
                    </Box>
                </Stack>
            </Stack>
            <Stack width="30%" >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    width={"100%"}
                    height={"100%"}
                    style={{
                        borderRadius: '50%',
                    }}
                    alt=''
                    src="/images/profile.webp"
                />
            </Stack>
        </Stack>
    )
}
