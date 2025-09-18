import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-reactive-validation',
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.css']
})
export class ReactiveValidationComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private validationService: ValidationService) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  onSubmit() {
    if (this.form.valid) {
      const emailMsg = this.validationService.isValidEmail(this.email?.value)
        ? '✅ Email is valid'
        : '❌ Invalid email';

      const passMsg = this.validationService.isStrongPassword(this.password?.value)
        ? '✅ Strong password'
        : '❌ Weak password';

      alert(emailMsg + '\n' + passMsg);
    }
  }
}
