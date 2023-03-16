import ChildrenProps from "@cubes/common/types/ChildrenProps";
import React from "react";
import MediaQuery from "react-responsive";

export default function Desktop({ children }: ChildrenProps) {
  return <MediaQuery minWidth={1200}></MediaQuery>;
}
