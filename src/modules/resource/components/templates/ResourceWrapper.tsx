import React, { useState } from "react";
import ResourceList from "../organisms/ResourceList";
import Filters, { IFilters } from "../molecules/Filters";

interface ResourceWrapperProps { }

export default function ResourceWrapper({ }: ResourceWrapperProps) {
  const [filters, setFilters] = useState<IFilters>({
    departmentCode: "",
    nafCode: "",
    romeCode: "",
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
