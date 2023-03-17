import { COLORS } from "@cubes/common/constants";
import React from "react";
import ChildrenProps from "../types/ChildrenProps";
import { ConfigProvider } from "antd";

export default function AntdThemeProvider({ children }: ChildrenProps) {
  return (
    <ConfigProvider
      locale={{ locale: "fr" }}
      theme={{
        token: {
          colorPrimary: COLORS.primary,
          colorFillSecondary: COLORS.secondary,
          colorInfo: COLORS.info,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
