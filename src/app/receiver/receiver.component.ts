import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
  receivedMessage = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentMessage.subscribe(msg => this.receivedMessage = msg);
  }
}
