import { Button, Dropdown, Popover } from "antd";
import departments from "../../data/departments.json";
import nafCodes from "../../data/nafCodes.json";
import romeCodes from "../../data/romeCodes.json";
import FilterSelect from "../atoms/FilterSelect";

export interface IFilters {
  departmentCode: string | null;
  nafCode: string | null;
  romeCode: string | null;
}

interface FiltersProps {
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

export default function Filters({ setFilters }: FiltersProps) {
  return (
    <div className="flex space-y-4 flex-col w-2/4">
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
