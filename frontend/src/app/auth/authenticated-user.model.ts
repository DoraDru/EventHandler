export class AuthenticatedUser {
  constructor(public userName: string, public jwt: string, public roles: string[]) {}
}
