import { PaletteMode, createTheme } from '@mui/material';
import { grey, indigo } from '@mui/material/colors';

// theme 정의 : https://mui.com/customization/default-theme/
const getDesignToken = (mode: PaletteMode) => {
    const lightPalette = {
        primary: {
            ...indigo,
            main: indigo[900],
        },
        background: {
            default: indigo[50],
            paper: indigo[50],
        },

        text: {
            primary: grey[900],
            secondary: grey[800],
        },
    };

    const darkPalette = {
        primary: {
            ...indigo,
            main: indigo[50],
        },
        background: {
            default: indigo[900],
            paper: indigo[900],
        },
        text: {
            primary: '#fff',
            secondary: indigo[300],
        },
    };

    const defaultPalette = {};

    return mode === 'light'
        ? { ...defaultPalette, ...lightPalette }
        : { ...defaultPalette, ...darkPalette };
};

export const globalTheme = (mode: PaletteMode) => {
    return createTheme({
        palette: getDesignToken(mode),
        breakpoints: {
            values: {
                xs: 0,
                sm: 480,
                md: 768,
                lg: 992,
                xl: 1200,
            },
        },
        typography: {
            fontFamily: 'Pretendard',
        },
    });
};
