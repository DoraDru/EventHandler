import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user/user.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  const isAuth = userService.isAuthenticated();

  if (!isAuth) {
    router.navigate(['/signin']);
  }
  return isAuth;
};
