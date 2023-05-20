import ChildrenProps from "@cubes/common/types/ChildrenProps";

interface PaperProps extends ChildrenProps {
  className?: string;
}

export default function Paper({ children, className }: PaperProps) {
  return (
    <div className={`bg-white p-5 rounded-xl ${className}`}>{children}</div>
  );
}
