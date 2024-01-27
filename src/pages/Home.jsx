import React from 'react';
import { motion } from 'framer-motion';
import { Box, Image, Text } from '@chakra-ui/react';

export const Home = () => {
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ padding: '40px', position: 'relative', zIndex: 1 }}
      >
        <Text>Home</Text>
      </motion.div>
    </Box>
  );
};

