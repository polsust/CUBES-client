export interface JwtContent extends JwtUser {
  exp?: number;
  iat?: number;
  nbf?: number;
}

interface JwtUser {
  email: string;
  fName: string;
  lName: string;
  IdRole: string;
  login: string;
}
