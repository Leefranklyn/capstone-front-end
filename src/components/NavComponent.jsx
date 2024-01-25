import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, Flex, Box, Text, Button} from '@chakra-ui/react'

export const NavComponent = () => {
    return (
        <>
            <Flex as="nav" align="center" justify="space-between" paddingTop={5} paddingLeft={10} paddingRight={10} gap="20px">
                <Box>
                    <ChakraLink as={ReactRouterLink} to="/" color="#09544D" fontSize={"38px"} fontFamily={"roboto-serif"} fontWeight={600} lineHeight={"44.5px"}>PropSqr</ChakraLink>
                </Box>
                <Box>
                    <Flex as="nav" align="center" justify="space-between" p={1} gap="20px">
                        <ChakraLink as={ReactRouterLink} to="/about" pointerEvents="none">About Us</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to="/professionals" pointerEvents="none">Find Professionals</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to="/marketplace" pointerEvents="none">Building Materials And Supplies</ChakraLink>
                        <ChakraLink as={ReactRouterLink} to="/blog" pointerEvents="none">Blog</ChakraLink>
                    </Flex>
                </Box>
                <Box>
                    <Flex as="nav" align="center" justify="space-between" p={1} gap="20px">
                        <ChakraLink as={ReactRouterLink} to="/login">Login</ChakraLink>
                        <Button as={ReactRouterLink} to="/signup" bg="customGreen.500" color="white" _hover={{bg: "customGreen.400", color: "white"}}>Sign Up</Button>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}
