import React from "react";
import ChildrenProps from "../types/ChildrenProps";
import GlobalCssPriorityProvider from "./GlobalCssPriorityProvider";
import MuiThemeProvider from "./MuiThemeProvider";
import ReactQueryProvider from "./ReactQueryProvider";

export default function Providers({ children }: ChildrenProps) {
  return (
    <ReactQueryProvider>
      <GlobalCssPriorityProvider>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </GlobalCssPriorityProvider>
    </ReactQueryProvider>
  );
}
