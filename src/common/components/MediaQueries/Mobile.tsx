import ChildrenProps from "@cubes/common/types/ChildrenProps";
import React from "react";
import MediaQuery from "react-responsive";

export default function Mobile({ children }: ChildrenProps) {
  return <MediaQuery maxWidth={600}>{children}</MediaQuery>;
}
