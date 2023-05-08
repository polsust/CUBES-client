export const COLORS = {
  primary: "#23272A",
  secondary: "#10AEA5",
  info: "#738BD7",
};

export const ROUTES = {
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
