import React, { ReactNode } from "react";
import GlobalCssPriorityProvider from "./GlobalCssPriorityProvider";
import MuiThemeProvider from "./MuiThemeProvider";
import ReactQueryProvider from "./ReactQueryProvider";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ReactQueryProvider>
      <GlobalCssPriorityProvider>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </GlobalCssPriorityProvider>
    </ReactQueryProvider>
  );
}
