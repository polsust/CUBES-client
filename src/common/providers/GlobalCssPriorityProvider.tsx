import { StyledEngineProvider } from "@mui/material/styles";
import { ReactNode } from "react";

interface GlobalCssPriorityProviderProps {
  children: ReactNode;
}

export default function GlobalCssPriorityProvider({
  children,
}: GlobalCssPriorityProviderProps) {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
}
