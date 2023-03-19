import { COLORS } from "@cubes/common/constants";
import React from "react";
import ChildrenProps from "../types/ChildrenProps";
import { ConfigProvider } from "antd";
import frFR from "antd/lib/locale/fr_FR";

export default function AntdThemeProvider({ children }: ChildrenProps) {
  return (
    <ConfigProvider
      locale={frFR}
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
