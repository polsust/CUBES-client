import ChildrenProps from "@cubes/common/types/ChildrenProps";

export default function Desktop({ children }: ChildrenProps) {
  return <div className="md:block hidden">{children}</div>;
}
