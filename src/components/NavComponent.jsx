import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, Flex, Box, Text, Button, useMediaQuery } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { DesktopNav } from './Nav/DesktopNav'
import { MobileNav } from './Nav/MobileNav'

export const NavComponent = () => {
    const [isLargerThanTablet] = useMediaQuery('(min-width: 965px)');

    return (
        <>
            {isLargerThanTablet ? <DesktopNav />: <MobileNav />}
        </>
    )
}
