import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark'
};

const theme = extendTheme({ 
  config, 
  colors: { 
    gray:  {
      50: '#eeeef6',
      100: '#cdcce1',
      200: '#ababcd',
      300: '#8a89bc',
      400: '#6967aa',
      500: '#504e91',
      600: '#3e3d70',
      700: '#2d2c4f',
      800: '#1b1a2f',
      900: '#090911',
    }} });

export default theme;


