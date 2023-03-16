import { COLORS } from "@cubes/common/constants";
import { createTheme, ThemeProvider } from "@mui/material";
import React, { ReactNode } from "react";
import ChildrenProps from "../types/ChildrenProps";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    // warning: {},
    // error: {},
    info: {
      main: COLORS.info,
    },
    // success: {},
  },
  status: {
    // danger: orange[500],
  },
});

export default function MuiThemeProvider({ children }: ChildrenProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
