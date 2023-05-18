import React, { useState } from "react";
import ResourceList from "../organisms/ResourceList";
import Filters, { IFilters } from "../molecules/Filters";

interface ResourceListWrapperProps { }

export default function ResourceListWrapper({ }: ResourceListWrapperProps) {
  const [filters, setFilters] = useState<IFilters>({
    departmentCode: null,
    nafCode: null,
    romeCode: null,
    type: null,
  });

  return (
    <div className="w-11/12 md:w-9/12">
      <h1 className="text-5xl text-center text-white">
        (RE)ssources relationnels
      </h1>
      <Filters setFilters={setFilters} />

      <ResourceList filters={filters} />
    </div>
  );
}
