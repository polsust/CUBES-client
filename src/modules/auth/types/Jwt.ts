export interface JwtContent extends User {
  exp?: number;
  iat?: number;
  nbf?: number;
}

export interface User {
  email: string;
  fName: string;
  lName: string;
  IdRole: string;
  login: string;
}
