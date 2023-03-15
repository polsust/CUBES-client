import React, { ReactNode } from "react";
import GlobalCssPriority from "./GlobalCssPriority";
import MuiTheme from "./MuiTheme";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <GlobalCssPriority>
      <MuiTheme>{children}</MuiTheme>
    </GlobalCssPriority>
  );
}
