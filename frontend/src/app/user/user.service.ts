import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { AuthenticatedUser } from '../auth/authenticated-user.model';

@Injectable()
export class UserService {
  private url = '/api/users';
  user = new BehaviorSubject<AuthenticatedUser | null>(null);

  constructor(private http: HttpClient) {}

  register(name: string, password: string): void {
    this.http.post(`${this.url}/signup`, { name, password }).subscribe();
  }

  login(name: string, password: string) {
    this.http
      .post<AuthenticatedUser>(`${this.url}/signin`, { name, password })
      .pipe(
        catchError(this.handleError),
        tap((res) => {
          this.user.next(res);
          localStorage.setItem('userData', JSON.stringify(res));
        })
      )
      .subscribe();
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    if (errorRes.status === 401) {
      errorMessage = 'Invalid username or password!';
    }
    return throwError(() => new Error(errorMessage));
  }

  isAuthenticated(): boolean {
    return !!this.user.value;
  }
}
