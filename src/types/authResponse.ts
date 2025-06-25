import { Roles } from './roles';

export type AuthResponse = {
  id: number;
  username: string;
  role: Roles;
  token: string;
};
