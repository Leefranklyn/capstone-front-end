import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, Flex, Box, Text, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const DesktopLoginNav = () => {
  return (
    <>
    <Flex as="nav" align="center" justify="space-between" paddingTop={5} paddingLeft={10} paddingRight={10} gap="20px">
        <Box>
            <ChakraLink as={ReactRouterLink} to="/" color="#09544D" fontSize={"38px"} fontFamily={"roboto-serif"} fontWeight={600} lineHeight={"44.5px"}>PropSqr</ChakraLink>
        </Box>
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Box>
                <Flex as="nav" align="center" justify="space-between" p={1} gap="20px">
                <ChakraLink as={ReactRouterLink} to="/login" height="19px" fontWeight={400} fontFamily={"roboto-serif"}>Login</ChakraLink>
                <Button as={ReactRouterLink} to="/signup" bg="customGreen.500" marginTop={"5px"} width="90px" _hover={{bg: "customGreen.400"}}><Text color="white" fontWeight={400} fontFamily={"roboto-serif"}>Sign Up</Text></Button>
                </Flex>
            </Box>
        </motion.div>
    </Flex>
</>
  )
}
