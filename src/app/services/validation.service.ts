import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  isValidEmail(email: string): boolean {
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return pattern.test(email)
  }

  isStrongPassword(password: string): boolean {
    return password.length >= 6;
  }
}
