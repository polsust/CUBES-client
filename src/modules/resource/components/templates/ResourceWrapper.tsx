import React from "react";
import ResourceList from "../organisms/ResourceList";
import Search from "../molecules/Search";

interface ResourceWrapperProps { }

export default function ResourceWrapper({ }: ResourceWrapperProps) {
  return (
    <div>
      <h1 className="text-white">(RE)ssources relationnels</h1>
      <Search onChange={console.log} />

      <ResourceList query="" />
    </div>
  );
}
