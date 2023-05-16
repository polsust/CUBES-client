import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface DataFieldProps {
  icon?: IconProp;
  label?: string | number;
  data: string | number | ReactNode | null;
  title?: string;
}

export default function DataField({
  label,
  data,
  icon,
  title,
}: DataFieldProps) {
  if (!data === null) return null;

  return (
    <p title={title ?? (label as string) ?? ""}>
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {Boolean(label) && <b>{label}:</b>} {data}
    </p>
  );
}
