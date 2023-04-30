import ChildrenProps from "@cubes/common/types/ChildrenProps";

export default function Mobile({ children }: ChildrenProps) {
  return <div className="md:hidden">{children}</div>;
}
