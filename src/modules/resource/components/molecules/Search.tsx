import React, { useEffect, useState } from "react";
import SearchBar from "../atoms/SearchBar";
import Filters, { IFilters } from "./Filters";

interface SearchObject {
  query: string;
  filters: IFilters;
}

interface SearchProps {
  onChange: (value: SearchObject) => void;
}

export default function Search({ onChange }: SearchProps) {
  const [query, setQuery] = useState<string>("");
  const [filters, setFilters] = useState<IFilters>({
    departmentCode: null,
    nafCode: null,
    romeCode: null,
  });

  useEffect(() => {
    onChange({
      query,
      filters,
    });
  }, [query, filters]);

  return (
    <div>
      <SearchBar onChange={setQuery} />
      <Filters setFilters={setFilters} />
    </div>
  );
}
