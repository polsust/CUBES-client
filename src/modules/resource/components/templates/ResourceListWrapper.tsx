import React, { useState } from "react";
import FilteredResources from "../organisms/FilteredResources";
import Filters, { IFilters } from "../molecules/Filters";
import Heading from "@cubes/common/components/atoms/Heading";

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
      <Heading>(RE)ssources relationnels</Heading>
      <Filters setFilters={setFilters} />

      <FilteredResources filters={filters} />
    </div>
  );
}
