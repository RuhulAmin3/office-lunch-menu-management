export type SelectedLunchMenu = {
  id: string;
  userId: string;
  lunchMenuId: string;
  date: string; // Date in ISO 8601 format
  createdAt: string; // Date in ISO 8601 format
  updatedAt: string; // Date in ISO 8601 format
  lunchMenu: LunchMenu;
  user: User;
};

export type LunchMenu = {
  id: string;
  title: string;
  image: string;
  description: string;
  date: string; // Date in ISO 8601 format
  createdAt: string; // Date in ISO 8601 format
  updatedAt: string; // Date in ISO 8601 format
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  createdAt: string; // Date in ISO 8601 format
  updatedAt: string; // Date in ISO 8601 format
};
