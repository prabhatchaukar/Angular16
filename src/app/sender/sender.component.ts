import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent {
  message = '';

  constructor(private dataService: DataService) {}

  sendMessage() {
    this.dataService.changeMessage(this.message);
  }
}
