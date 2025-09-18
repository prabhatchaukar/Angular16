import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.email, this.password).subscribe(user => {
      if (user) {
        this.router.navigate(['/dashboard']); // after login redirect
      } else {
        this.error = 'User not found. Please register!';
        setTimeout(() => this.router.navigate(['/register']), 2000);
      }
    });
  }
}
