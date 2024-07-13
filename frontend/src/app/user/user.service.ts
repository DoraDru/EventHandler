import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private url = '/api/users';

  constructor(private http: HttpClient) {}

  register(name: string, password: string): void {
    this.http.post(`${this.url}/signup`, { name, password }).subscribe();
  }

  login(name: string, password: string) {
    this.http.post(`${this.url}/signin`, { name, password }).subscribe();
  }
}
