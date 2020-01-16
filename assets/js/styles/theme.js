import React from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ad1457',
        },
        secondary: {
            main: '#3f51b5',
        },
    },
});

export default function Palette(children) {
    return (
        <ThemeProvider theme={theme}>
            {...children}
        </ThemeProvider>
    );
}