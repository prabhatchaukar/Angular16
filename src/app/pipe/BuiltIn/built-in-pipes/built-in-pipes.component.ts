import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent {
  today: Date = new Date();
  price: number = 1999.99;
  user = {
    name: 'Prabhat',
    role: 'Full Stack Developer',
    skills: ['Angular', 'Node.js', 'MongoDB']
  };
}
