import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../shared/models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';  

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<User | null> {
    return this.http.post<User>(`${this.apiUrl}/login`, { email, password }).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          return user;
        }
        return null;
      }),
      catchError(() => of(null))
    );
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, user);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
