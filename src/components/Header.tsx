"use client"
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Stack from 'naxui/Stack'
import Box from 'naxui/Box'
import IconButton from 'naxui/IconButton'

import { changeTheme, useMediaScreen } from 'naxui-manager'

import HomeIcon from 'naxui-icons/outlined/Home'
import ProfileIcon from 'naxui-icons/outlined/AccountCircle'
import ProjectIcon from 'naxui-icons/outlined/CallToAction'
import LightModeIcon from 'naxui-icons/outlined/LightMode'
import DarkModeIcon from 'naxui-icons/outlined/DarkMode'

const Header = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [theme, setTheme] = useState('default-dark')
    const screen = useMediaScreen()

    return (
        <Stack
            my={2}
            height={75}
            bgcolor="color.paper"
            borderRadius={screen.isDown('sm') ? 1 : 2}
            px={2}
            direction='row'
            justifyContent='space-between'
            alignItems="center"
        >
            <Stack
                direction='row'
                justifyContent='center'
            >
                <Box mx={.5} >
                    <IconButton
                        color={pathname !== '/' ? 'default' : 'primary'}
                        variant='filled'
                        onClick={() => router.push('/')}
                    >
                        <HomeIcon fontSize={30} />
                    </IconButton>
                </Box>
                <Box mx={.5} >
                    <IconButton
                        color={pathname !== '/about' ? 'default' : 'primary'}
                        variant='filled'
                        onClick={() => router.push('/about')}
                    >
                        <ProfileIcon fontSize={30} />
                    </IconButton>
                </Box>
                <Box mx={.5} >
                    <IconButton
                        color={pathname !== '/project' ? 'default' : 'primary'}
                        variant='filled'
                        onClick={() => router.push('/project')}
                    >
                        <ProjectIcon fontSize={30} />
                    </IconButton>
                </Box>

            </Stack>
            <Box>
                <Box>
                    <IconButton
                        onClick={() => {
                            if (theme === 'default-dark') {
                                changeTheme('default')
                                setTheme('default')
                            } else {
                                changeTheme('default-dark')
                                setTheme('default-dark')
                            }
                        }}
                    >
                        {
                            theme === 'default-dark' ?
                                <LightModeIcon fontSize={30} /> :
                                <DarkModeIcon fontSize={30} />
                        }
                    </IconButton>
                </Box>
            </Box>
        </Stack>
    )
}

export default Header