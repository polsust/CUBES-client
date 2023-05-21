import { Form, Select } from "antd";
import { useEffect } from "react";
import { useQuery } from "react-query";

interface FilterSelectProps {
  data: {
    value: string;
    label: string;
  }[];
  onChange: (value: string | undefined) => void;
  entityName: string;
}

export default function FilterSelect({
  data,
  onChange,
  entityName,
}: FilterSelectProps) {
  const { data: defaultValue } = useQuery({
    queryFn: () => {
      const initalValue = data[Math.floor(Math.random() * data.length)];

      return initalValue;
    },
    queryKey: entityName,
    staleTime: Infinity,
  });
  useEffect(() => {
    onChange(defaultValue?.value);
  }, [defaultValue]);

  if (!defaultValue) return null;

  return (
    <Form layout="vertical">
      <Form.Item label={<p className="font-bold">{entityName}</p>}>
        <Select
          className="w-full"
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
      </Form.Item>
    </Form>
  );
}
