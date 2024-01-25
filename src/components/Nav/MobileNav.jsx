import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, Box, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useDisclosure, Flex, Stack, Button } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export const MobileNav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex as="nav" align="center" justify="space-between" paddingTop={5} paddingLeft={10} paddingRight={10} gap="20px">
                <Box>
                    <ChakraLink as={ReactRouterLink} to="/" color="#09544D" fontSize={"38px"} fontFamily={"roboto-serif"} fontWeight={600} lineHeight={"44.5px"}>PropSqr</ChakraLink>
                </Box>
                <Box>
                    <IconButton
                        aria-label="Open menu"
                        icon={<HamburgerIcon />}
                        onClick={onOpen}
                    />
                </Box>
            </Flex>
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton paddingTop={"30px"}/>
                        <DrawerHeader paddingTop={"30px"}>Menu</DrawerHeader>
                        <DrawerBody>
                            {/* Your navigation links go here */}
                            <Stack direction={['column']} spacing='24px'>
                                <ChakraLink as={ReactRouterLink} to="/about" pointerEvents="none">About Us</ChakraLink>
                                <ChakraLink as={ReactRouterLink} to="/professionals" pointerEvents="none">Find Professionals</ChakraLink>
                                <ChakraLink as={ReactRouterLink} to="/marketplace" pointerEvents="none">Building Materials And Supplies</ChakraLink>
                                <ChakraLink as={ReactRouterLink} to="/blog" pointerEvents="none">Blog</ChakraLink>
                                <ChakraLink as={ReactRouterLink} to="/login">Login</ChakraLink>
                                <Button as={ReactRouterLink} to="/signup" bg="customGreen.500" color="white" _hover={{ bg: "customGreen.400", color: "white" }}>Sign Up</Button>
                            </Stack>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};