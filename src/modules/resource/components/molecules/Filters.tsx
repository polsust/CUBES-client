import departments from "../../data/departments.json";
import nafCodes from "../../data/nafCodes.json";
import romeCodes from "../../data/romeCodes.json";
import FilterSelect from "../atoms/FilterSelect";

export interface IFilters {
  departmentCode: string;
  nafCode: string;
  romeCode: string;
}

interface FiltersProps {
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

export default function Filters({ setFilters }: FiltersProps) {
  return (
    <div className="flex justify-center space-x-4 w-full">
      <FilterSelect
        entityName="department"
        data={departments}
        onChange={(value) => {
          setFilters((oldFilters) => ({
            ...oldFilters,
            departmentCode: value,
          }));
        }}
      />
      <FilterSelect
        entityName="NAF"
        data={nafCodes}
        onChange={(value) =>
          setFilters((oldFilters) => ({ ...oldFilters, nafCode: value }))
        }
      />
      <FilterSelect
        entityName="ROME"
        data={romeCodes}
        onChange={(value) =>
          setFilters((oldFilters) => ({ ...oldFilters, romeCode: value }))
        }
      />
    </div>
  );
}
