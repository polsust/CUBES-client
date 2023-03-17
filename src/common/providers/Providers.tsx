import React from "react";
import ChildrenProps from "../types/ChildrenProps";
import AntdThemeProvider from "./AntdThemeProvider";
import ReactQueryProvider from "./ReactQueryProvider";

export default function Providers({ children }: ChildrenProps) {
  return (
    <ReactQueryProvider>
      <AntdThemeProvider>{children}</AntdThemeProvider>
    </ReactQueryProvider>
  );
}
