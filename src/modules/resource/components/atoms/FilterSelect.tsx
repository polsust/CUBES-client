import { Select } from "antd";
import { useQuery } from "react-query";

interface FilterSelectProps {
  data: {
    value: string;
    label: string;
  }[];
  onChange: (value: string) => void;
  entityName: string;
}

export default function FilterSelect({
  data,
  onChange,
  entityName,
}: FilterSelectProps) {
  const { data: defaultValue } = useQuery({
    queryFn: () => data[Math.floor(Math.random() * data.length)],
    queryKey: entityName,
  });
  if (!defaultValue) return null;

  return (
    <Select
      showSearch
      placeholder={`Selectionner un ${entityName}`}
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      }
      options={data}
      defaultValue={defaultValue.value}
    />
  );
}
