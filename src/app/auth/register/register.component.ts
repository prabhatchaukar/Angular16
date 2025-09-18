import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    const user: User = { name: this.name, email: this.email, password: this.password };
    this.authService.register(user).subscribe({
      next: (res) => this.router.navigate(['/login']),
      error: (err) => this.error = 'Registration failed!'
    });
  }
}
