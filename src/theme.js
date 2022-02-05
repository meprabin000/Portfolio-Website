import { createTheme } from '@mui/material/styles';
import { green, blue } from '@mui/material/colors';
import colors from './res/colors';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1.2rem',
                    color: "#fff",
                }
            }
        }
    },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    backgroundColor: {
        main: colors.background,
    },
    hoverLink: {
        main: colors.link.hover,
    },
    unselectedLink: {
        main: colors.link.unselected,
    },
    selectedLink: {
        main: colors.link.selected,
    },
    textPrimary: {
        main: colors.text.primary,
    },
    textSecondary: {
        main: colors.text.secondary,
    },
    typography: {
        fontFamily: "Georgia",
    },
  },
});

export default theme;