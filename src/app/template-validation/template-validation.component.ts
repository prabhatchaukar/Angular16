import { Component } from '@angular/core';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-template-validation',
  templateUrl: './template-validation.component.html',
  styleUrls: ['./template-validation.component.css']
})
export class TemplateValidationComponent {
  email= '';
  password= '';
  emailMessage = "";
  passwordMessage = "";

  constructor(private validationService: ValidationService){}

  onSubmit(){
    this.emailMessage= this.validationService.isValidEmail(this.email) ? '✅ Email is valid' : '❌ Invalid email';
    this.passwordMessage = this.validationService.isStrongPassword(this.password) ? '✅ Strong password' : '❌ Weak password (min 6 chars)'; 
  }

}
