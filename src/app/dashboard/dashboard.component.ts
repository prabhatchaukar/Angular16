import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  user: any = null;

  constructor(private dashboardService: DashboardService){}
  ngOnInit(): void {
    this.dashboardService.getUser().subscribe({
      next: (res) => this.user = res,
      error: (err) => console.error('Error loading user:', err)
    });
  }

  logout() {
    localStorage.removeItem('token'); // clear token
    window.location.href = '/login';  // redirect
  }
}
