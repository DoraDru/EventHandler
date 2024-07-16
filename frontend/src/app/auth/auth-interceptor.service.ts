import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { exhaustMap, Observable, take } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.userService.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (user && user.jwt) {
          req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${user.jwt}`,
            },
          });
        }
        return next.handle(req);
      })
    );
  }
}
