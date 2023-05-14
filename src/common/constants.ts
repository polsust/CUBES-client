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
  catalog: {
    path: "/",
    requiresAuth: false,
  },
  profile: {
    path: "/profil",
    requiresAuth: true,
  }
};

export const USER_ROLES = {
  supAdmin: "1",
  admin: "2",
  moderator: "3",
  citizen: "4",
};
