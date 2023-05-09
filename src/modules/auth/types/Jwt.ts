export interface JwtContent extends JwtUser {
  exp?: number;
  iat?: number;
  nbf?: number;
}

interface JwtUser {
  email: string;
  firstname: string;
  IdRole: string;
}
