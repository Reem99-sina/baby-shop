"use client";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#97D5EE",
      light: "#ebf2f5",
      "300": "#F0F5F7",
    },
    secondary: {
      main: "#F6DCB8",
    },
  },

  direction: "ltr",
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          fontWeight: "600",
          padding: "1rem 2rem",
          fontSize: "14px",
        },
        
      },
    }
  },
});
