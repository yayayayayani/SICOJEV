import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: colors.primary,
      dark: colors.primaryDark,
      light: colors.primaryLight,
    },

    success: {
      main: colors.success,
    },

    error: {
      main: colors.error,
    },

    warning: {
      main: colors.warning,
    },

    background: {
      default: colors.background,
      paper: colors.surface,
    },

    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
  },

  typography: {
    fontFamily: "Segoe UI, Arial, sans-serif",

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 600,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;