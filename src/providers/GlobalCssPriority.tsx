import { StyledEngineProvider } from "@mui/material/styles";
import { ReactNode } from "react";

interface GlobalCssPriorityProps {
  children: ReactNode;
}

export default function GlobalCssPriority({
  children,
}: GlobalCssPriorityProps) {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
}
