import ChildrenProps from "@cubes/common/types/ChildrenProps";

interface HeadingProps extends ChildrenProps {
  className?: string;
}

export default function Heading({ children, className }: HeadingProps) {
  return (
    <h1 className={`text-5xl text-center text-white ${className}`}>
      {children}
    </h1>
  );
}
