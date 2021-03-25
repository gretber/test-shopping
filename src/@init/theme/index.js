import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5A1094',
        },
        secondary: {
            main: '#979797',
        }
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 748,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
    },
});