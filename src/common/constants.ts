export const COLORS = {
  primary: "#23272A",
  secondary: "#10AEA5",
  info: "#738BD7",
};

interface Routes {
  [key: string]: {
    path: string;
    requiresAuth: boolean;
  };
}

export const ROUTES: Routes = {
  login: {
    path: "/connexion",
    requiresAuth: false,
  },
  signup: {
    path: "/inscription",
    requiresAuth: false,
  },
  root: {
    path: "/",
    requiresAuth: false,
  },
};
