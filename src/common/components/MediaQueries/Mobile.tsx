import React, { ReactNode } from "react";
import MediaQuery from "react-responsive";

interface MobileProps {
  children: ReactNode;
}

export default function Mobile({ children }: MobileProps) {
  return <MediaQuery maxWidth={600}>{children}</MediaQuery>;
}
