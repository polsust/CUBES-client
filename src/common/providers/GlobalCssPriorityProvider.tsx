import { StyledEngineProvider } from "@mui/material/styles";
import ChildrenProps from "../types/ChildrenProps";

export default function GlobalCssPriorityProvider({ children }: ChildrenProps) {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
}
