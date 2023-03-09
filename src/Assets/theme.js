import uniSansHeavyCaps from './Fonts/uni-sans.heavy-caps.otf';
import { createTheme } from '@mui/material/styles';

const uniSansBold = {
    fontFamily: 'uniSans',
    fontStyle: 'bold',
    fontDisplay: 'swap',
    fontWeight: '600',
    src: `
      local('UniSans'),
      local('UniSans-SemiBold'),
      url(${uniSansHeavyCaps}) format('ttf')
      `,
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createTheme({
    typography: {
        fontFamily: ['"Open Sans"', 'UniSans', 'Roboto'].join(','),
        h1: {
            fontFamily: '"UniSans", Open Sans',
        }
    },
    overrides: {
        MuiCssBaseline: {
          '@global': {
            '@font-face': [uniSansBold],
            body: {
                backgroundColor: '#ff00ff',
            },
          },
        }
      },
    palette: {
        primary: {
          light: '#5B8FB9',
          main: '#1c1b1b',
          dark: '#1c1b1b',
          contrastText: '#B4A5A5',
        },
        secondary: {
          light: '#3C415C',
          main: '#301B3F',
          dark: '#151515',
          contrastText: '#B4A5A5',
        },
        background: {
            default: "#222222"
          },
      },
})

export default theme;