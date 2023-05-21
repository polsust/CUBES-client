export const COLORS = {
  primary: "#23272A",
  secondary: "#10AEA5",
  info: "#738BD7",
};

export const USER_ROLES = {
  supAdmin: "1",
  admin: "2",
  moderator: "3",
  citizen: "4",
};

export const ROUTES = {
  login: {
    path: "/connexion",
    requiresAuth: false,
    roles: [],
  },
  signup: {
    path: "/inscription",
    requiresAuth: false,
    roles: [],
  },
  catalog: {
    path: "/catalogue",
    requiresAuth: false,
    roles: [],
  },
  profile: {
    path: "/mon-profil",
    requiresAuth: true,
    roles: [],
  },
  adminDashboard: {
    path: "/tableau-de-bord",
    requiresAuth: true,
    roles: [USER_ROLES.supAdmin, USER_ROLES.admin, USER_ROLES.moderator],
  },
};
