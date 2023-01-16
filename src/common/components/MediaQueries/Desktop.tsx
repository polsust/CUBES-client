import React, { ReactNode } from "react";
import MediaQuery from "react-responsive";

interface DesktopProps {
  children: ReactNode;
}

export default function Desktop({ children }: DesktopProps) {
  return <MediaQuery minWidth={1200}></MediaQuery>;
}
