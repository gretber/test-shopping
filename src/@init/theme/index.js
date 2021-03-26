import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5A1094',
        },
        secondary: {
            main: '#979797',
        },
        text: {
            primary: '#777879',
        },
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
    typography: {
        subtitle1: {
            fontSize: 16,
        },
        subtitle2: {
            fontSize: 13,
            lineHeight: '12px',
        },
        body1: {
            fontSize: 12,
        },
        body2: {
            fontSize: 10,
        },
        h3: {
            fontSize: 26,
        },
    },
    overrides: {
        MuiButton: {
            root: {
                width: 180,
                height: 45,
                textTransform: "none",
            }
        }
    }
});