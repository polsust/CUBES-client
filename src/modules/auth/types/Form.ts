export interface LoginFormValues {
  email: string;
  password: string;
}

export interface SignupFormValues extends LoginFormValues {
  fName: string;
  lName: string;
  login: string;
}
