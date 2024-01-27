/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import {
  Text, Box, Flex, FormControl, FormLabel, Input, Button, Image, Link as ChakraLink, Spinner, Alert, AlertIcon
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useLoginLogic } from '../logic/useLoginLogic';

export const Login = () => {
 const { formData, loading, alertType, alertMessage, showAlert, handleInputChange, handleLogin } = useLoginLogic();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Flex direction="column" alignItems="center" paddingX={{ base: 4, md: 10 }} gap={{ base: 6, md: 10 }}>
        <Text fontSize={{ base: '24px', md: '38px' }} lineHeight={{ base: '32px', md: '44px' }} fontWeight={600} fontFamily="roboto-serif" marginTop="20px">Login now</Text>
        <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 6, md: '7%' }}>
          <Box flex="1">
            <Image src='https://res.cloudinary.com/dwinqwsit/image/upload/v1706305160/image_1_ndzbsd.png' alt='login image' width="100%" height="auto" marginBottom={{ base: 6, md: 0 }} />
          </Box>
          <Box flex="1">
            <Flex direction="column" gap={6} alignItems="center">
              <FormControl>
                <FormLabel fontSize="24px" lineHeight="32px" fontWeight={400} fontFamily="roboto-serif">Email</FormLabel>
                <Input placeholder='Input your email address' name="email"
                  value={formData.email} onChange={handleInputChange} width="100%" height="64px" paddingLeft="30px" fontSize="18px" fontFamily="roboto-serif" border="1px solid grey" />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="24px" lineHeight="32px" fontWeight={400} fontFamily="roboto-serif">Password</FormLabel>
                <Input placeholder='Password' name="password"
                  value={formData.password} onChange={handleInputChange} height="64px" paddingLeft="30px" fontSize="18px" fontFamily="roboto-serif" border="1px solid grey" />
              </FormControl>
              <Button onClick={handleLogin} as={ReactRouterLink} to="/login" width="100%" height="64px" marginTop={10} bg="customGreen.500" border="1px solid #09544d" _hover={{ bg: "customGreen.500" }}>
                {loading ? <Spinner size="sm" color="white" /> : <Text color="white" fontWeight={400} fontFamily="roboto-serif">Log In</Text>}
              </Button>
              <Text fontWeight={400} fontSize="18px" fontFamily="roboto-serif">OR</Text>
              <Button as={ReactRouterLink} to="/signup" width="100%" height="64px" bg="white" border="1px solid #09544d" _hover={{ bg: "white" }}>
                <Text color="customGreen.400" fontWeight={400} fontFamily="roboto-serif">Sign Up</Text>
              </Button>
              <Text fontSize="18px" fontFamily="roboto-serif" fontWeight={400}>
                If you can't remember your login details, <ChakraLink as={ReactRouterLink} to="/resetpassword" color="#09544D" fontSize="18px" fontFamily="roboto-serif" fontWeight={400}>Reset password</ChakraLink>
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      {showAlert && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
          <Alert status={alertType} position="fixed" bottom="20px" right="50px" width={"300px"}>
            <AlertIcon />
            {alertMessage}
          </Alert>
        </motion.div>
      )}
    </motion.div>
  );
};

