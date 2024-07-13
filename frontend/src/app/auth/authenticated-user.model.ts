export interface AuthenticatedUser {
  userName: string;
  jwt: string;
  roles: string[];
}
