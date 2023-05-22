import departments from "../../data/departments.json";
import nafCodes from "../../data/nafCodes.json";
import romeCodes from "../../data/romeCodes.json";
import FilterSelect from "../atoms/FilterSelect";

export interface IFilters {
  departmentCode: string | null;
  nafCode: string | null;
  romeCode: string | null;
  type: string | null;
}

interface FiltersProps {
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

export default function Filters({ setFilters }: FiltersProps) {
  return (
    <div className="flex flex-col justify-center space-y-2 w-full lg:flex-row lg:space-y-0 lg:space-x-4">
      <div>
        <FilterSelect
          entityName="Department"
          data={departments}
          onChange={(value) => {
            setFilters((oldFilters) => ({
              ...oldFilters,
              departmentCode: value,
            }));
          }}
        />
        <FilterSelect
          entityName="Secteur d'activite"
          data={nafCodes}
          onChange={(value) =>
            setFilters((oldFilters) => ({ ...oldFilters, nafCode: value }))
          }
        />
      </div>
      <div>
        <FilterSelect
          entityName="Domaine d'activite"
          data={romeCodes}
          onChange={(value) =>
            setFilters((oldFilters) => ({ ...oldFilters, romeCode: value }))
          }
        />
        <FilterSelect
          entityName="Type de ressource"
          data={[
            { label: "Alternance", value: "alternance" },
            { label: "Job", value: "job" },
          ]}
          onChange={(value) =>
            setFilters((oldFilters) => ({ ...oldFilters, type: value }))
          }
        />
      </div>
    </div>
  );
}
