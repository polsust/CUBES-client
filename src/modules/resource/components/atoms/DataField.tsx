interface DataFieldProps {
  label: string;
  data: string | number;
}

export default function DataField({ label, data }: DataFieldProps) {
  if (!data) return null;

  return (
    <p>
      <b>{label}:</b> {data}
    </p>
  );
}
