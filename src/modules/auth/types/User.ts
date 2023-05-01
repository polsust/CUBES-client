export type Role = "admin" | "superAdmin" | "citizen";

export default interface User {
  username: string;
  role: Role;
}
