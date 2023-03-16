import React, { ReactNode } from "react";
import GlobalCssPriorityProvider from "./GlobalCssPriorityProvider";
import MuiThemeProvider from "./MuiThemeProvider";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <GlobalCssPriorityProvider>
      <MuiThemeProvider>{children}</MuiThemeProvider>
    </GlobalCssPriorityProvider>
  );
}
