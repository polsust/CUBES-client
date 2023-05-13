import React, { useState } from "react";
import ResourceList from "../organisms/ResourceList";
import Search, { SearchObject } from "../molecules/Search";

interface ResourceWrapperProps { }

export default function ResourceWrapper({ }: ResourceWrapperProps) {
  const [search, setSearch] = useState<SearchObject>({
    query: "",
    filters: {
      departmentCode: null,
      nafCode: null,
      romeCode: null,
    },
  });

  return (
    <div className="w-9/12">
      <h1 className="text-white">(RE)ssources relationnels</h1>
      <Search onChange={setSearch} />

      <ResourceList searchObject={search} />
    </div>
  );
}
