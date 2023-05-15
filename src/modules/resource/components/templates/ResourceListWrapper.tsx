import React, { useState } from "react";
import ResourceList from "../organisms/ResourceList";
import Filters, { IFilters } from "../molecules/Filters";

interface ResourceListWrapperProps { }

export default function ResourceListWrapper({ }: ResourceListWrapperProps) {
  const [filters, setFilters] = useState<IFilters>({
    departmentCode: null,
    nafCode: null,
    romeCode: null,
  });

  return (
    <div className="md:w-9/12 w-11/12">
      <h1 className="text-5xl text-center text-white">
        (RE)ssources relationnels
      </h1>
      <Filters setFilters={setFilters} />

      <ResourceList filters={filters} />
    </div>
  );
}
