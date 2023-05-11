import { Select } from "antd";
import React from "react";

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
  return (
    <div>
      <Select
        showSearch
        placeholder={`Selectionner un ${entityName}`}
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={data}
      />
    </div>
  );
}
