import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    customGreen: {
      50: '#e5f4f3',
      100: '#c0e1dd',
      200: '#97ceb7',
      300: '#6ebba1',
      400: '#4ba68a',
      500: '#09544d', // Your base color
      600: '#06443c',
      700: '#04352c',
      800: '#02251b',
      900: '#00140b',
    },
  },
});

export default theme;
