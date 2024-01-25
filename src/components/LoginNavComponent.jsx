import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, Flex, Box, Text, Button, useMediaQuery } from '@chakra-ui/react'
import { DesktopLoginNav } from './Nav/DesktopLoginNav'
import { MobileLoginNav } from './Nav/MobileLoginNav'
import { motion } from 'framer-motion'

export const LoginNavComponent = () => {
    const [isLargerThanTablet] = useMediaQuery('(min-width: 965px)');
    return (
        <>
            {isLargerThanTablet ? <DesktopLoginNav />: <MobileLoginNav />}
        </>
    )
}
